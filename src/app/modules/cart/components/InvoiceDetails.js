import React, {Component} from "react";
import {Button, Row, Col} from "antd";

import _ from "lodash";
import { Link } from 'react-router-dom';

import {InvoiceDetailsWrapper, InvoiceItem} from "../styles";

import InvoiceIcon from "@resources/images/icons/cart_icon.svg";
import config from "@config";
import Auth0 from "@modules/session";

class InvoiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grandTotal: 0,
    };
  }

  handleLogin = () => {
    Auth0.authorize({
      auth_database: config.AUTH0_DATABASE,
      brand: config.APP_BRAND,
    });
  };

  render() {
    const {
      cartGoToAccountDetails,
      cartGoToBillingDetails,
      isValidToken,
      cartItems,
    } = this.props;

    const isValidInvoice = cartItems.branch_id;
    const invoiceDetails = cartItems.details;

    return (
      <InvoiceDetailsWrapper>
        <Button
          type="secondary"
          onClick={() => cartGoToAccountDetails()}
          icon="left"
          className="back -mobile"
        >
          Back
        </Button>
        {!isValidInvoice && (
          <div>
            <img className="styled-img_cart-icon" src={InvoiceIcon} role='presentation'/>
            <h3>Invalid Invoice Number</h3>
            <p>Please select a valid invoice to pay</p>

            {isValidToken ? (
              <Button
                type="primary"
              >
                <Link to="/account/billing">Go To Billings</Link>
              </Button>
            ):(
              <Button type="primary" onClick={this.handleLogin}>
                Login to view Invoices
              </Button>
            )}

          </div>
        )}

        {isValidInvoice && (
          <div>
            <div className="styled-div_cart-item_form-header">
              <Button
                type="secondary"
                onClick={cartGoToAccountDetails}
                icon="left"
                className="back"
              >
                Back
              </Button>
              <h2>
                <span>{invoiceDetails.invoice_number}</span>
                <span className="invoice-amt">${invoiceDetails.total_amount}</span>
              </h2>
            </div>
            {
              _.map(invoiceDetails.items, (item, i) => {
                return (
                  <InvoiceItem key={i}>
                    <Row>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <div className="styled-div_cart_product-details">
                          <Row>
                            <Col xs={18} md={24} lg={16} xl={16} xxl={16}>
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
                            <Col xs={6} md={12} lg={4} xl={4} xxl={4}>
                              <div className="styled-div_cart_number-input_wrapper">
                                <h5>QTY.</h5>
                                <span>{item.quantity}</span>
                              </div>
                            </Col>
                            <Col
                              xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}
                              className="price-container"
                            >
                              <h5>AMT.</h5>
                              <h4>
                                {item.currency_symbol} {item.total_price || item.price * item.quantity}
                              </h4>
                              <span>{item.payment_cycle}</span>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </InvoiceItem>
                );
              })
            }
            <div className="actions">
              <Button
                type="primary"
                onClick={cartGoToBillingDetails}
              >
                Proceed to Billing Details
              </Button>
            </div>
          </div>
        )}
      </InvoiceDetailsWrapper>
    );
  }
}

export default InvoiceDetails;
