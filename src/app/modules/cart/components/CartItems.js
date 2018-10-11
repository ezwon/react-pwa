import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import {Form, Button, Row, Col} from "antd";
import _ from "lodash";
import {CartItemsWrapper, CartItem} from "../styles";

import {NumberInput} from "../../../ant-components/FormElements";

import CartIcon from "../../../../resources/images/icons/cart_icon.svg";


//TODO: Get all actual products in Cart from Service or LocalStorage

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: false,
      errors: {},
      grandTotal: 0,
    };
  }

  componentDidMount() {
    this.handleGrandTotal();
  }

  handleGrandTotal = () => {
    const {cartItems} = this.props;
    let grandTotal = 0;

    _.map(cartItems, (item) => {

      if (item.addons && Object.keys(item.addons).length > 0) {
        _.map(item.addons, (addon) => {
          grandTotal += addon.price * (addon.quantity || 0);
        });
      }

      if (item.price) {
        grandTotal += item.quantity * item.price;
      }
    });

    this.setState({grandTotal});
  };

  handleChangeAddOnQuantity = (key, addOnKey, val) => {
    const {cartItems} = this.props;
    const addOn = cartItems[key].addons[addOnKey];

    addOn.quantity = val;
    addOn.total_price = val * addOn.price;

    cartItems[key].addons[addOnKey] = addOn;

    this.props.cartUpdateItems({cartItems});
    this.handleGrandTotal();
  };

  handleChangeQuantity = (key, val) => {
    const {cartItems} = this.props;

    cartItems[key].quantity = val;
    cartItems[key].total_price = cartItems[key].price * val;

    if (cartItems[key] && cartItems[key].products) {
      _.map(cartItems[key].products, (item) => {
        item.new_quantity = item.quantity * val;
        item.new_price = item.price * val;
      });
    }

    this.props.cartUpdateItems({cartItems});
    this.handleGrandTotal();


  };

  handlePaymentCycle = (product) => {
    if (product.payment_cycle == "Subscription"){
      const paymentCycle = `per ${product.plan.interval_unit}`;
      return paymentCycle.substring(0,paymentCycle.length -1);
    } else {
      return product.payment_cycle;
    }
  };

  render() {
    const {
      cartGoToAccountDetails,
      cartGoToBillingDetails,
      cartItems,
      form,
    } = this.props;

    const {errors, grandTotal} = this.state;
    const hasCartItems = Object.keys(cartItems).length > 1;

    return (
      <CartItemsWrapper>
        {!hasCartItems && (
          <div>
            <img className="styled-img_cart-icon" src={CartIcon} role='presentation' />
            <h3>Oops! Your cart is empty</h3>
            <p>Please select a product to proceed</p>
            <Button
              onClick={() => {
                this.setState({init: false});
                this.props.history.push("/shop");
              }}
              type="primary"
            >
              Go To Shop
            </Button>
          </div>
        )}

        {hasCartItems && (
          <Form>
            <div className="styled-div_cart-item_form-header">
              <Button
                type="secondary"
                onClick={() => cartGoToAccountDetails()}
                icon="left"
                className="back"
              >
                Back
              </Button>
              <h2>Your Order <span>${grandTotal}</span></h2>
            </div>
            {_.map(cartItems, item => {
                if (item._id) {
                  return (
                    <CartItem key={item._id}>
                      <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                          <div className="styled-div_cart_product-details">
                            <Row>
                              <Col xs={18} md={16}>
                                <div className="_cart_product-details_block">
                                  <h5>Product</h5>
                                  <h1>{item.name} - {item.currency_symbol}{item.price}</h1>
                                  <p>{item.description}</p>
                                  <ul>
                                    {_.map(item.products, (product, i) =>
                                      <li key={i}>
                                        {product.new_quantity || product.quantity} x {product.name}
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              </Col>
                              <Col xs={6} md={4}>
                                <div className="styled-div_cart_number-input_wrapper">
                                  <div className="price-container -mobile">
                                    <h5>AMOUNT</h5>
                                    <h4>
                                      {item.currency_symbol} {item.total_price || item.price * item.quantity}
                                    </h4>
                                    <span>{this.handlePaymentCycle(item)}</span>
                                  </div>
                                  <h5>QTY.</h5>
                                  <NumberInput
                                    className="item-quantity"
                                    form={form}
                                    label={"Quantity"}
                                    name={`${item._id}-quantity`}
                                    required={true}
                                    onChange={e => this.handleChangeQuantity(item._id, e)}
                                    error={errors[`${item._id}-quantity`]}
                                    precision={0}
                                    hasFormatter={false}
                                    initialValue={item.quantity}
                                    min={item.min_order || 0}
                                    max={item.max_order || 10}
                                  />
                                </div>
                              </Col>
                              <Col
                                xs={12} sm={12} md={4}
                                className="price-container"
                              >
                                <h5>AMOUNT</h5>
                                <h4>
                                  {item.currency_symbol} {item.total_price || item.price * item.quantity}
                                </h4>
                                <span>{this.handlePaymentCycle(item)}</span>
                              </Col>
                            </Row>
                          </div>
                          {item.addons && Object.keys(item.addons).length > 0 && (
                            <div className="styled-div_cart_product-details_add-ons">
                              <Row>
                                <h5>Add Ons</h5>
                                {
                                  _.map(item.addons, (addon) =>
                                    <Row key={addon._id}>
                                      <Col xs={18} md={16}>
                                        <div className="_cart_product-details_add-ons_block">
                                          <h1>{addon.name} - ${addon.price}</h1>
                                          <p>{addon.description}</p>
                                        </div>
                                      </Col>
                                      <Col xs={6} md={4}>
                                        <div className="styled-div_cart_number-input_wrapper">
                                          <div className="price-container -mobile">
                                            <h4>{addon.currency_symbol || "$"} {addon.total_price || addon.price * (addon.quantity || 0)}</h4>
                                          </div>
                                          <NumberInput
                                            className="item-quantity"
                                            form={form}
                                            label={"Quantity"}
                                            name={`${item._id}-${addon._id}-quantity`}
                                            required={true}
                                            onChange={e => this.handleChangeAddOnQuantity(item._id, addon._id, e)}
                                            error={errors[`${item._id}-${addon._id}-quantity`]}
                                            precision={0}
                                            hasFormatter={false}
                                            initialValue={addon.quantity || 0}
                                            min={addon.min_order || 0}
                                            max={addon.max_order || 1}
                                          />
                                        </div>
                                      </Col>
                                      <Col xs={12} sm={12} md={4}>
                                        <div className="price-container">
                                          <h4>{addon.currency_symbol || "$"} {addon.total_price || addon.price * (addon.quantity || 0)}</h4>
                                        </div>
                                      </Col>
                                    </Row>
                                  )
                                }
                              </Row>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </CartItem>
                  );
                }
              }
            )}
            <div className="actions">
              <Button
                type="primary"
                onClick={() => cartGoToBillingDetails()}
              >
                Proceed to Billing Details
              </Button>
            </div>
          </Form>
        )}
      </CartItemsWrapper>
    );
  }
}

export default withRouter(Form.create()(CartItems));
