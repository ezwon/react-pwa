/* global paypal */
import {withRouter} from "react-router-dom";
import React, {Component} from "react";
import {Form, Button, Row, Col, Icon, message} from "antd";
import _ from "lodash";
import {ReviewOrderWrapper} from "../styles";
import {
  CheckInput,
  NumberInput,
} from "@ant-components/FormElements";
import CartError from "@resources/images/icons/cart_error.svg";
import CartSuccess from "@resources/images/icons/cart_success.svg";
import {
  Discount,
  PersonalDetails,
  BillingDetails,
  Summary,
  Invoice,
} from "./review-order";

import config from "@config";
import Auth0 from "@modules/session";

const localStorage = require("localStorage");

//TODO: Get all actual products in Cart from Service or LocalStorage

class ReviewOrder extends Component {
  constructor(props) {
    super(props);

    if (this.props.isPayingInvoice) {
      const invoiceDetails = this.props.cartItems.details;

      this.state = {
        placedOrder: false,
        discountCode: "",
        applyingDiscount: false,
        discountEditable: true,
        partialPayment: false,
        partialAmount: invoiceDetails.total_amount - invoiceDetails.amount_paid,
      };
    } else {
      this.state = {
        placedOrder: false,
        discountCode: "",
        applyingDiscount: false,
        discountEditable: true,
      };
    }
  }

  componentDidMount() {
    const {paymentType} = this.props;
    if (paymentType === "paypal") {
      paypal.Button.render({
        env: config.PAYPAL_ENV, // sandbox | production
        style: {
          label: "checkout", // checkout | credit | pay
          size: "medium",    // small | medium | responsive
          shape: "rect",     // pill | rect
          color: "blue",      // gold | blue | silver
        },
        // Show the buyer a 'Pay Now' button in the checkout flow
        commit: true,
        onClick: () => {
          // console.log('CLICK');
        },
        onCancel: () => {
          // console.log('CANCEL');
        },
        onClose: () => {
          // console.log('CLOSE');
        },
        // payment() is called when the PayPal generated button is clicked
        payment: () => {
          // console.log('PAYMENT');
          const data = this.handleGenerateData();

          // Make a call to your server to set up the payment
          return paypal.request.post(`${config.API_URL}/paypal`, {
            data: JSON.stringify(data),
            is_paypal_data: true,
          }).then((res) => {
            if (res && res.payment_id) {
              return res.payment_id;
            }
            // TODO throw error
            return null;
          }).catch((err) => {
            console.log("err: ", err);
          });
        },
        // onAuthorize() is called when the buyer approves the payment
        onAuthorize: (data, actions) => { // eslint-disable-line no-unused-vars
          // console.log('ON AUTHORIZE');
          const token = localStorage.getItem("access_token");
          let access_token = "";
          if (token) {
            access_token = `Bearer: ${localStorage.getItem("access_token")}`;
          }

          const transactionData = this.handleGenerateData();

          const paypalData = {
            paypal: {
              payment_id: data.paymentID,
              payer_id: data.payerID,
            },
            access_token,
          };

          const postData = Object.assign({}, transactionData, paypalData);

          this.handlePurchase(postData);
        },
      }, "#paypal-button-container");
    }

    const discount = localStorage.getItem("discountCode");

    if (discount && discount !== "") {
      this.handleApplyDiscount(discount);
    }
  }

  handleReset = () => {
    this.props.cartUpdateStepDetails({
      status: "default",
    });
  };

  handleLogin = () => {
    Auth0.authorize({
      auth_database: config.AUTH0_DATABASE,
      brand: config.APP_BRAND,
    });
  };

  handleGoToShop = () => {
    this.props.history.push("/shop");
    setTimeout(() => {
      this.props.cartUpdateStepDetails({status: "default"});
      this.props.cartGoToAccountDetails();
    }, 500);
  };

  handleGoToMyProducts = () => {
    this.props.history.push("/account/products");
    setTimeout(() => {
      this.props.cartUpdateStepDetails({status: "default"});
      this.props.cartGoToAccountDetails();
    }, 500);
  };

  handleGenerateData() {
    const {isValidToken, isPayingInvoice, cartItems, metadata, paymentType, zoho, discount} = this.props;
    const products = [];
    let data = {};

    if (isPayingInvoice) {
      data = {
        payment_type: "zoho", // All invoice payments is via Credit Card for now
        zoho,
        metadata: isValidToken ? {} : metadata,
        amount: cartItems.details.total_amount,
      };
    } else {
      _.map(cartItems, (cartItem) => {
        if (cartItem.quantity && cartItem.quantity > 0) {
          const addons = _.filter(cartItem.addons, (addon) => {
            return addon.quantity > 0;
          });
          products.push({
            product: {
              _id: cartItem._id,
              quantity: cartItem.quantity,
              price: cartItem.price,
              total_price: cartItem.total_price,
            },
            addons,
          });
        }
      });

      data = {
        branch_id: cartItems.branch_id,
        payment_type: paymentType,
        zoho,
        metadata: isValidToken ? {} : metadata,
        products,
      };
    }

    if (discount && discount.is_valid) {
      data.metadata["discount_code"] = discount.code;
    }


    return data;
  };

  handlePlaceOrder = () => {
    const data = this.handleGenerateData();
    data.payment_type = "invoice";
    this.setState({placedOrder: true});
    this.props.cartPurchaseRequest({
      data,
      onSuccess: () => {
        this.handleSuccessfulPurchase();
      },
    });


  };

  handlePurchase = (postData) => {
    const data = postData && postData.paypal ? postData : this.handleGenerateData();
    this.setState({placedOrder: false});
    this.props.cartPurchaseRequest({
      data,
      onSuccess: () => {
        this.handleSuccessfulPurchase();
      },
    });
  };

  handlePayInvoice = () => {
    const invoice = this.props.cartItems.details;
    this.setState({placedOrder: false});
    if (this.state.partialPayment && this.state.partialAmount === 0) {
      message.info("Please enter a valid amount", 2);
      return;
    }

    const remainingAmountToPay = invoice.total_amount - invoice.amount_paid;
    const data = this.handleGenerateData();

    data.amount = this.state.partialPayment ? this.state.partialAmount : remainingAmountToPay;

    this.props.cartPayInvoiceRequest({
      invoiceId: invoice._id,
      data,
      onSuccess: () => {
        this.handleSuccessfulPurchase();
      },
    });
  };

  handleSuccessfulPurchase = () => {
    localStorage.setItem("cart_items", "");
    localStorage.setItem("discountCode", "");
  };

  handlePartialPaymentToggle = (e) => {
    const invoiceDetails = this.props.cartItems.details;
    this.setState({
      partialPayment: e.target.checked,
      partialAmount: e.target.checked ? 0 : invoiceDetails.total_amount - invoiceDetails.amount_paid
    }, () => {
      console.log(this.state);
    });


  };

  handleChangeDiscount = e => {
    this.setState({discountCode: e.target.value, discountEditable: true});
  };

  handleApplyDiscount = (code) => {
    const {cartItems, cartApplyDiscount} = this.props;
    const discountCode = code || this.state.discountCode;

    const data = {
      code: discountCode,
      products: []
    };

    _.map(cartItems, (product) => {
      if (product.quantity > 0) {
        data.products.push({
          product,
          addons: _.filter(product.addons, (addon) => {
            return addon.quantity > 0;
          })
        })
      }
    });

    this.setState({applyingDiscount: true, discountEditable: false});

    cartApplyDiscount({
      data,
      onSuccess: result => {
        if (result.is_valid) {
          this.setState({
            discountCode,
            applyingDiscount: false,
            discountEditable: false,
          });
          localStorage.setItem("discountCode", discountCode);
        } else {
          this.setState({
            applyingDiscount: false,
            discountEditable: true,
          });
          localStorage.setItem("discountCode", "");
        }
      },
    });
  };

  handleRemoveDiscount = () => {
    this.setState({discountEditable: true, discountCode: ""});
    this.props.cartApplyDiscountDone({discount: {}});
    localStorage.setItem("discountCode", "");
  };

  render() {
    const {
      cartItems,
      paymentType,
      metadata,
      zoho,
      steps,
      isValidToken,
      user,
      invoiceDetails,
      discount,
      cartGoToBillingDetails,
      cartGoToAccountDetails,
      isPayingInvoice,
      form,
    } = this.props;

    const {discountCode, applyingDiscount, discountEditable, placedOrder} = this.state;
    const hasDiscount = discount && !discount.errors && discount.is_valid;

    return (
      <ReviewOrderWrapper>
        {
          {
            default: (
              <div className="default">
                <Button
                  type="secondary"
                  onClick={() => cartGoToBillingDetails()}
                  icon="left"
                  className="back -mobile"
                >
                  Back
                </Button>
                <Row type='flex' justify='center' align='top' gutter={24}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="styled-div_cart-item_form-header _review-order_override">
                      <Button
                        type="secondary"
                        onClick={() => cartGoToBillingDetails()}
                        icon="left"
                        className="back"
                      >
                        Back
                      </Button>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={11} xl={9}>
                    <div className="user-details">
                      <PersonalDetails
                        user={user}
                        isValidToken={isValidToken}
                        metadata={metadata}
                        cartGoToAccountDetails={cartGoToAccountDetails}
                      />
                      <BillingDetails
                        metadata={metadata}
                        user={user}
                        isValidToken={isValidToken}
                        zoho={zoho}
                        invoiceDetails={invoiceDetails}
                        cartGoToBillingDetails={cartGoToBillingDetails}
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={13} xl={15}>
                    <div className="styled-div_review-order_details-wrapper">
                      {isPayingInvoice ? (
                        <div>
                          <div className="styled-div_review-order_details-content">
                            <Invoice
                              cartItems={cartItems}
                              discount={discount}
                              hasDiscount={hasDiscount}
                            />
                          </div>
                          <div className="partial-payment-wrapper">
                            <Form>
                              <CheckInput
                                form={form}
                                label="Partial Payment"
                                name="partial_payment"
                                checked={this.state.partialPayment}
                                onChange={(e) => {
                                  this.handlePartialPaymentToggle(e)
                                }}
                              />

                              {this.state.partialPayment ? (
                                <div className="partial-payment-input">
                                  <NumberInput
                                    form={form}
                                    label="Enter Partial Amount"
                                    name="partial_amount"
                                    min={0}
                                    max={cartItems.details.total_amount - cartItems.details.amount_paid}
                                    onChange={(e) => {
                                      this.setState({partialAmount: e})
                                    }}
                                    initialValue={0}
                                  /></div>
                              ) : (
                                <div className="paying-full-amt">
                                  <label>
                                    Paying full {cartItems.details.amount_paid > 0 ? "remaining" : ""} amount of
                                    <span style={{marginLeft: "7px"}}>
                                     {`${cartItems.details.currency_symbol}${cartItems.details.total_amount - cartItems.details.amount_paid}`}
                                   </span>
                                  </label>
                                </div>
                              )}

                              <div className="action">
                                <Button
                                  className="styled-button_review-order_place-order"
                                  type="primary"
                                  icon="credit-card"
                                  onClick={this.handlePayInvoice}
                                >
                                  Pay Invoice
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="styled-div_review-order_details-content">
                            <Summary
                              cartItems={cartItems}
                              discount={discount}
                              hasDiscount={hasDiscount}
                            />
                            <Discount
                              handleApplyDiscount={this.handleApplyDiscount}
                              handleChangeDiscount={this.handleChangeDiscount}
                              handleRemoveDiscount={this.handleRemoveDiscount}
                              discountCode={discountCode}
                              discount={discount}
                              hasDiscount={hasDiscount}
                              applyingDiscount={applyingDiscount}
                              discountEditable={discountEditable}
                            />
                          </div>
                          {paymentType === "paypal" ? (
                            <div id="paypal-button-container">
                            </div>
                          ) : (
                            <div className="order-summary-btns">
                              <Button
                                className="styled-button_review-order_place-order bordered"
                                icon="file-text"
                                onClick={this.handlePlaceOrder}
                              >
                                <span>
                                  <span>Place Order</span>
                                  <span>This will generate an Invoice </span>
                                </span>
                              </Button>
                              <Button
                                className="place-order-btn"
                                type="primary"
                                icon="credit-card"
                                onClick={this.handlePurchase}
                              >
                                Purchase
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            ),
            loading: (
              <div className="processing">
                <Icon type="shopping-cart"/>
                <h2>Processing order…</h2>
              </div>
            ),
            error: (
              <div className="error">
                <img src={CartError}/>
                <h2>Oh Snap!</h2>
                <p>
                  Something went wrong. Our team is looking on it now. <br/>
                  Error Details: <i className="error-message">{steps.statusMessage}</i>
                </p>
                <Button type="primary" onClick={this.handleReset}>
                  Go back
                </Button>
              </div>
            ),
            success: (
              <div className="success">
                <div>
                  <img src={CartSuccess}/>

                  {isPayingInvoice ?
                    (
                      <div>
                        <h2>Purchase Successful!</h2>
                        <p>Thank you for your purchase!</p>
                      </div>
                    ) : (
                      <div>
                        <h2>Payment Successful!</h2>
                        <p>Thank you for your payment!</p>
                      </div>
                    )
                  }

                  {!isValidToken && (
                    <Button type="primary" onClick={this.handleLogin}>
                      Login to My Account
                    </Button>
                  )}

                  {isValidToken && (
                    <div>
                      <Button onClick={this.handleGoToMyProducts} type="primary">
                        Go to My Products
                      </Button>
                      <Button onClick={this.handleGoToShop} type="primary">
                        Go back to Shop
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ),
          }[steps.status]
        }
      </ReviewOrderWrapper>
    );
  }
}

export default Form.create()(withRouter(ReviewOrder));
