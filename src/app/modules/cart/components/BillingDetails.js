import React, {Component} from "react";
import _ from "lodash";
import {BillingDetailsWrapper} from "../styles";
import DefaultPayment from "./payments/default";
import ExistingCards from "./payments/existing-cards";
import PayPalButton from "./payments/paypal-button";

import {Form, Row, Col, Button} from "antd";
import {TextInput} from "../../../ant-components/FormElements";

import config from "@config";

class BillingDetails extends Component {
  constructor(props) {
    super(props);

    let branch_id = _.get(this.props,"cartItems.branch_id","");

    this.state = {
      data: this.props.invoiceDetails || {},
      errors: {},
      branch_id,
      activeTab: this.props.paymentActiveTab === "" ?
        config.PAYMENT_METHODS[branch_id][0] :
        this.props.paymentActiveTab,
    };
  }

  handleTabChange = key => {
    console.log("tabChange!", key);
    this.setState({activeTab: key});
  };

  handleChange = e => {
    const field = e.target.id;
    const data = Object.assign({}, this.state.data);
    data[field] = e.target.value;

    this.setState({data});
    this.props.cartUpdateInvoiceDetailsRequest(data);
  };

  render() {
    const {
      session,
      user,
      cartGoToItems,
      zoho,
      cartItems,
      invoiceDetails,
      cartConfirmBillingDetails,
      form,
    } = this.props;

    let {activeTab, errors, branch_id} = this.state;

    const paymentMethods = config.PAYMENT_METHODS[branch_id];

    return (
      <BillingDetailsWrapper>
        <div className="styled-div_cart-item_form-header">
          <Button
            type="secondary"
            onClick={() => cartGoToItems()}
            icon="left"
            className="back"
          >
            Back
          </Button>
        </div>
        <div>
          <Row className="btn-tab">
            {user && paymentMethods.indexOf("existing") > -1 && (
              <Col xs={{span: 12}} sm={{span: 12}} lg={{span: 6}}>
                <Button
                  icon="credit-card"
                  onClick={this.handleTabChange.bind(this, "existing")}
                  className={`${activeTab === "existing" ? "active" : ""}`}
                >
                  Existing Credit Card
                </Button>
              </Col>
            )}
            {paymentMethods.indexOf("newCard") > -1 && (
              <Col xs={{span: 12}} sm={{span: 12}} lg={{span: 6}}>
                <Button
                  icon="credit-card"
                  onClick={this.handleTabChange.bind(this, "newCard")}
                  className={`${activeTab === "newCard" || !session.user ? "active" : ""}`}
                >
                  New Credit Card
                </Button>
              </Col>
            )}
            {paymentMethods.indexOf("paypal") > -1 && (
              <Col xs={{span: 12}} sm={{span: 12}} lg={{span: 6}}>
                <Button
                  icon="profile"
                  onClick={this.handleTabChange.bind(this, "paypal")}
                  className={`${activeTab === "paypal" ? "active" : ""}`}
                >
                  PayPal
                </Button>
              </Col>
            )}
            {paymentMethods.indexOf("paypal-authorize") > -1 && (
              <Col xs={{span: 12}} sm={{span: 12}} lg={{span: 6}}>
                <Button
                  icon="profile"
                  onClick={this.handleTabChange.bind(this, "paypalAuthorize")}
                  className={`${activeTab === "paypalAuthorize" ? "active" : ""}`}
                >
                  PayPal Authorize
                </Button>
              </Col>
            )}
          </Row>
          <Row>
            <Form layout="vertical">
              <div className="styled-div_billing-details_wrapper">
                <h2>Billing Details</h2>
                <p>
                  Details that will reflect on Invoice
                </p>
                <TextInput
                  form={form}
                  label={"Name or Company Name"}
                  name={"name"}
                  onBlur={this.handleChange}
                  error={errors.name}
                  initialValue={invoiceDetails.name}
                  min={2}
                  max={50}
                />
                <TextInput
                  form={form}
                  label={"Address"}
                  name={"address"}
                  onChange={this.handleChange}
                  error={errors.address}
                  initialValue={invoiceDetails.address}
                  rows={3}
                  min={2}
                  max={50}
                />
              </div>
            </Form>
          </Row>
          <div className="container">
            <div className="styled-div_billing-details_wrapper _button-wrapper">
              {
                {
                  existing: (
                    <ExistingCards
                      zoho={zoho}
                      user={user}
                      handleTabChange={this.handleTabChange}
                      cartGoToItems={cartGoToItems}
                      cartItems={cartItems}
                      cartConfirmBillingDetails={cartConfirmBillingDetails}
                    />
                  ),
                  newCard: (
                    <DefaultPayment
                      zoho={zoho}
                      cartGoToItems={cartGoToItems}
                      cartConfirmBillingDetails={cartConfirmBillingDetails}
                    />
                  ),
                  paypal: <PayPalButton
                    cartConfirmBillingDetails={cartConfirmBillingDetails}
                  />,
                  paypalAuthorize: <div>Coming soon</div>,
                }[activeTab]
              }
              </div>
          </div>
        </div>
      </BillingDetailsWrapper>
    );
  }
}

export default Form.create()(BillingDetails);
