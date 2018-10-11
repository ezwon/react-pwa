import React from "react";
import _ from "lodash";
import {Icon, Button, Input, Row, Col} from "antd";

export const Summary = props => {
  const {cartItems, discount} = props;

  let grandTotal = 0;
  let subTotal = 0;
  let totalDiscount = 0;
  let currencySymbol = "";

  if (discount.is_valid) {
    _.map(discount.products, (productDiscount) => {
      const cartItemProduct = cartItems[productDiscount.product._id];

      if (cartItemProduct) {
        _.map(productDiscount.addons, (addOnDiscount) => {
          const addOn = cartItemProduct.addons[addOnDiscount._id];

          cartItemProduct.addons[addOnDiscount._id] = Object.assign({}, addOn, addOnDiscount);
        });
        cartItems[productDiscount.product._id] = Object.assign({}, cartItemProduct, productDiscount.product);
      }
    });
  }

  _.map(cartItems, (item) => {

    if (item.quantity && item.quantity > 0) {
      currencySymbol = item.currency_symbol;
      subTotal += item.quantity * (item.orig_price ? item.orig_price : item.price);
      grandTotal += item.total_price;
    }

    if (item.addons && Object.keys(item.addons).length > 0) {

      _.map(item.addons, (addon) => {

        if (addon.quantity && addon.quantity > 0) {
          subTotal += addon.quantity * (addon.orig_price ? addon.orig_price : addon.price);
          grandTotal += addon.total_price;
        }

        if (addon.total_discount) {
          totalDiscount += addon.total_discount;
        }
      });
    }

    if (item.total_discount) {
      totalDiscount += item.total_discount;
    }

  });

  return (
    <div className="styled-div_review-order_details-wrapper_inner _order-summary">
      <h3>Order Summary</h3>
      <div className="product">
        <div>
          {
            _.map(cartItems, (item) => {
              if (item.quantity && item.quantity > 0) {

                const addOns = _.filter(item.addons, (addon) => {
                  return addon.quantity > 0;
                });

                return (
                  <div key={item._id} style={{marginTop: "20px"}}>
                    <Row type='flex' justify='center' align='top' gutter={24}>
                      <Col xs={12} lg={14}>
                        <h6>{item.name}</h6>
                      </Col>
                      <Col xs={6} lg={5}>
                        <div className="_align _align-left">
                          <h5>{item.currency_symbol}{item.price}</h5>
                          {item.orig_price && <span>{item.currency_symbol}{item.orig_price}</span>}
                        </div>
                      </Col>
                      <Col xs={6} lg={5}>
                        <div className="_align _align-right">
                          <Icon type="close" title="times"/>
                          <h5>{item.quantity}</h5>
                        </div>
                      </Col>
                    </Row>

                    {item.products && item.products > 0 && (
                      <div>
                        <div style={{marginTop: "40px"}}>
                          <h6>Bundled Items</h6>
                          <ul>
                            {
                              _.map(item.products, (product, i) => {
                                return (
                                  <div key={i} style={{marginTop: "5px"}}>
                                    <Row type='flex' justify='center' align='top' gutter={24}>
                                      <Col xs={24} sm={24} md={24} lg={14}>
                                        <h1>{product.name}</h1>
                                      </Col>
                                      <Col xs={12} sm={12} md={12} lg={5}>
                                        <div className="_align _align-left">
                                        </div>
                                      </Col>
                                      <Col xs={6} sm={6} md={6} lg={0}>
                                      </Col>
                                      <Col xs={6} sm={6} md={6} lg={5}>
                                        <div className="_align _align-right">
                                          <Icon type="close" title="times"/>
                                          <h5>{product.quantity}</h5>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                );
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    )}
                    {addOns && addOns.length > 0 && (
                      <div>
                        <div style={{marginTop: "40px"}}>
                          <h6>Add-Ons</h6>
                          {
                            _.map(addOns, (addon, i) => {
                              return (
                                <div key={i} style={{marginTop: "5px"}}>
                                  <Row type='flex' justify='center' align='top' gutter={24}>
                                    <Col xs={12} lg={14}>
                                      <h1>{addon.name}</h1>
                                    </Col>
                                    <Col xs={6} lg={5}>
                                      <div className="_align _align-left">
                                        <h5>{addon.currency_symbol || "$"}{addon.price}</h5>
                                        {addon.discount > 0 &&
                                        <span>{addon.currency_symbol || "$"}{addon.orig_price}</span>}
                                      </div>
                                    </Col>
                                    <Col xs={6} lg={5}>
                                      <div className="_align _align-right">
                                        <Icon type="close" title="times"/>
                                        <h5>{addon.quantity}</h5>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              );
                            })
                          }
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
            })
          }
        </div>
        <div className="_grand-total">
          <Row type='flex' justify='center' align='top' gutter={24}>
            <Col xs={12} sm={12} md={12}>
              <h6>Sub total</h6>
            </Col>
            <Col xs={12} sm={12} md={12}>
              <div className="_align _align-left">
                <h5>{currencySymbol}{subTotal}</h5>
              </div>
            </Col>
          </Row>
          {totalDiscount > 0 &&
          <Row type='flex' justify='center' align='top' gutter={24}>
            <Col xs={12} sm={12} md={12}>
              <h6>Discount</h6>
            </Col>
            <Col xs={12} sm={12} md={12}>
              <div className="_align _align-left">
                <h5>{currencySymbol}{totalDiscount}</h5>
              </div>
            </Col>
          </Row>}
          <Row type='flex' justify='center' align='top' gutter={24} className="gtotal">
            <Col xs={12} sm={12} md={12}>
              <h6>Total</h6>
            </Col>
            <Col xs={12} sm={12} md={12}>
              <div className="_align _align-left">
                <h5>{currencySymbol}{grandTotal}</h5>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export const Discount = props => {
  const {
    handleApplyDiscount,
    handleChangeDiscount,
    discountCode,
    discount,
    applyingDiscount,
    discountEditable,
    handleRemoveDiscount,
  } = props;

  return (
    <div className="discount">
      <Row gutter={16}>
        <Col xs={14} lg={15}>
          <Input
            className={discount && discount.errors ? "error" : ""}
            placeholder="Discount Code"
            name="discountCode"
            onChange={handleChangeDiscount}
            disabled={!discountEditable}
            value={discountCode}
          />
        </Col>
        <Col xs={10} lg={9}>
          <Button
            type="secondary"
            onClick={() => {handleApplyDiscount();}}
            disabled={
              (!discountCode.length || applyingDiscount || !discountEditable) &&
              !discountEditable
            }
          >
            {applyingDiscount ? <Icon type="loading"/> : "Apply"}
          </Button>
        </Col>
      </Row>
      {discount && discount.errors ? <span>{discount.errors}</span> : null}
      {discount && discount.is_valid && !discountEditable ? (
        <div>
          <a onClick={handleRemoveDiscount}>Remove</a>
        </div>
      ) : null}
    </div>
  );
};

export const Invoice = props => {
  const {cartItems: {details}} = props;
  return (
    <div className="styled-div_review-order_details-wrapper_inner _order-summary">
      <h3>Invoice Summary</h3>
      <div className="product">
        <div>
          {
            _.map(details.items, (item, i) => {
              if (item.quantity && item.quantity > 0) {
                return (
                  <div key={i} style={{marginTop: "20px"}}>
                    <Row type='flex' justify='center' align='top' gutter={24}>
                      <Col xs={12} lg={14}>
                        <h6>{item.name}</h6>
                      </Col>
                      <Col xs={6} lg={5}>
                        <div className="_align _align-left">
                          <h5>${item.price}</h5>
                        </div>
                      </Col>
                      <Col xs={6} lg={5}>
                        <div className="_align _align-right">
                          <Icon type="close" title="times"/>
                          <h5>{item.quantity}</h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                );
              }
            })
          }
        </div>
        <div className="_grand-total">
          <Row type='flex' justify='center' align='top' gutter={24} className="gtotal">
            <Col xs={12} sm={12} md={12}>
              <h6>Total:</h6>
            </Col>
            <Col xs={12} sm={12} md={12}>
              <div className="_align _align-left">
                <h5>${details.total_amount}</h5>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export const PersonalDetails = props => {
  const {isValidToken, user, metadata, cartGoToAccountDetails} = props;
  return (
    <div className="styled-div_review-order_details-wrapper">
      <h2>Personal Details</h2>
      {isValidToken &&
      user.customer && ( // for existing accounts
        <div className="styled-div_review-order_details-wrapper_inner">
          <span>
            {user.customer.full_name}
          </span>
          <span>
            {user.customer.email}
          </span>
        </div>
      )}

      {!isValidToken && ( // for new accounts
        <div className="details">
          <span>
            {`${metadata.first_name} ${metadata.last_name}`}
          </span>
          <span>
            {metadata.email}
          </span>
        </div>
      )}

      <a className="edit" onClick={() => cartGoToAccountDetails()}>
        Edit
      </a>
    </div>
  );
};

export const BillingDetails = props => {
  const {
    zoho,
    cartGoToBillingDetails,
    invoiceDetails,
    metadata,
    isValidToken,
    user,
  } = props;
  const fullName =
    invoiceDetails.name.trim() === ""
      ? isValidToken
        ? user.customer && user.customer.full_name
        : `${metadata.first_name} ${metadata.last_name}`
      : invoiceDetails.name;
  return (
    <div className="styled-div_review-order_details-wrapper billing-details">
      <h2>Billing Address</h2>

      <div className="styled-div_review-order_details-wrapper_inner">
        <span>
          {invoiceDetails.address.trim() === ""
            ? "N/A"
            : invoiceDetails.address}
        </span>
      </div>

      <a className="edit" onClick={() => cartGoToBillingDetails()}>
        Edit
      </a>
      <div className="styled-div_review-order_details-wrapper_inner" style={{marginTop: "40px"}}>
        <h2>Billing to</h2>
        {zoho.card_id && ( // for existing credit cards / payment methods
          <div className="styled-div_review-order_details-wrapper_inner">
            <span>
              <label>Card Number:</label> •••• •••• •••• {zoho.last_four_digits}
            </span>
            <span>
              <label>Card Expiry</label>: {zoho.expiry_month} / {zoho.expiry_year}
            </span>
          </div>
        )}

        {zoho.card_number && ( // for new credit card
          <div className="styled-div_review-order_details-wrapper_inner">
            <span>{zoho.first_name} {zoho.last_name}</span>
            <span>{zoho.card_number}</span>
            <span>{zoho.expiry_month} / {zoho.expiry_year} - {zoho.cvv_number}</span>
          </div>
        )}
        <a className="edit" onClick={() => cartGoToBillingDetails()}>
          Edit
        </a>
      </div>
    </div>
  );
};
