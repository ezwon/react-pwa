import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Form, Row, Col, message, Button, Icon} from "antd";
import Cards from "react-credit-cards";
import {TextInput, SaveButton} from "@ant-components/FormElements";

import { AddPaymentMethodWrapper } from "../styles";

import {
  paymentCreateNew,
  paymentProductCreateNewCard,
} from "../actions";

import {
  formatCreditCardNumber,
  formatExpirationDate,
  formatCVC,
} from '../utils';

import "react-credit-cards/es/styles-compiled.css";

class AddPaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      name: "",
      cvc: "",
      expiry: "",
      saving: false,
      loading: true,
    };
  }

  handleChange = (key, e) => {
    if (key === "number") {
      const formatedCCNumber = formatCreditCardNumber(e.target.value);
      e.target.value = formatedCCNumber;
      this.setState({[key]: formatedCCNumber});
    } else if (key === "expiry") {
      const formatedExpiry = formatExpirationDate(e.target.value);
      e.target.value = formatedExpiry;
      this.setState({[key]: formatedExpiry});
    } else if (key === "cvc") {
      const formatedCVC = formatCVC(e.target.value);
      e.target.value = formatedCVC;
      this.setState({[key]: formatedCVC});
    } else {
      this.setState({[key]: e.target.value});
    }

  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, data) => {
      if (!err) {
        const {form, product, handleSuccess} = this.props;
        data.expiry_month = Number(data.expiry_month);
        data.expiry_year = Number(data.expiry_year);

        this.setState({saving: true});

        const payload = {
          data,
          onSuccess: result => {
            if (result) {
              form.resetFields();
              console.log("ccAdd:", result);
              this.setState({saving: false},()=>{
                message.success("Payment Method successfully created");
                handleSuccess();
              });

            }
          },
          onError: err => {
            if (err) {
              console.log("ccAdd:", err);
              this.setState({saving: false},()=>{
                message.success(err);
              });

            }
          },
        };

        if(product){
          payload.product_id = product._id;
          this.props.paymentProductCreateNewCard(payload);
        } else {
          this.props.paymentCreateNew(payload);
        }
      }
    });
  };

  render() {
    const {form, handleCancel} = this.props;
    const {
      number,
      name,
      cvc,
      expiry,
      saving,
    } = this.state;

    return (
      <AddPaymentMethodWrapper>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <Row>
            {/*<Col className="cc-mobile" xs={24} xl={14}>
              <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
              />
            </Col>*/}
            <Col xs={24} xl={12} className="card-details">
              <h1 className="form-header">Card Details</h1>
              <TextInput
                className="form-input"
                form={form}
                label="Name"
                name="name"
                colon={false}
                required={true}
                placeholder="Name"
                onChange={e => this.handleChange("name", e)}
              />
              <TextInput
                className="form-input"
                form={form}
                label="Card Number"
                name="card_number"
                colon={false}
                required={true}
                min={16}
                max={22}
                placeholder="Enter card number"
                pattern="[\d| ]{16,22}"
                onChange={e => this.handleChange("number", e)}
              />
              <Row gutter={16}>
                <Col md={12} sm={12} xs={12}>
                  <TextInput
                    className="form-input"
                    form={form}
                    label="Valid Thru"
                    name="expiry"
                    placeholder="MM/YY"
                    colon={false}
                    required={true}
                    max={5}
                    onChange={e => this.handleChange("expiry", e)}
                  />
                </Col>
                <Col sm={8} xs={8}>
                  <TextInput
                    className="form-input"
                    form={form}
                    label="CVV"
                    name="cvv_number"
                    placeholder="CVV"
                    colon={false}
                    required={true}
                    onChange={e => this.handleChange("cvc", e)}
                  />
                </Col>
              </Row>
            </Col>
            <Col className="cc-desktop" xs={24} xl={12}>
              <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
              />
            </Col>
          </Row>
          {/*
          <Row className="billing-address">
            <Col><h1 className="form-header">Billing Address</h1></Col>
          </Row>
          <Row gutter={16}>
            <Col md={24} lg={24} xl={12}>
              <TextInput
                className="form-input"
                form={form}
                label="Address Line 1"
                required={true}
                name="street"
                colon={false}
                placeholder="Address 1"
              />
              <TextInput
                className="form-input"
                form={form}
                label="Address Line 2"
                name="address2"
                colon={false}
                placeholder="Address 2 (Optional)"
              />
            </Col>
            <Col md={24} lg={24} xl={12}>
              <Row gutter={16}>
                <Col xs={24} xl={10}>
                  <TextInput
                    className="form-input"
                    form={form}
                    label="City"
                    required={true}
                    name="city"
                    colon={false}
                    placeholder="Enter City"
                  />
                </Col>
                <Col xs={24} xl={10}>
                  <TextInput
                    className="form-input"
                    form={form}
                    label="State/Province/Region"
                    required={true}
                    name="state"
                    colon={false}
                    placeholder="Enter State/Province/Region"
                  />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} sm={10} span={15}>
                  <TextInput
                    className="form-input"
                    form={form}
                    label="Country"
                    required={true}
                    name="country"
                    colon={false}
                    placeholder="Enter Country"
                  />
                </Col>
                <Col xs={14} sm={14} md={{span: 8, push: 1}} lg={{span: 8, push: 1}}>
                  <TextInput
                    className="form-input"
                    form={form}
                    colon={false}
                    label="Zip Code"
                    name="zip"
                    placeholder="Zip Code"
                  />
                </Col>
              </Row>
            </Col>
          </Row>*/}
          <Row className="action">
            <Col xs={24}>
              <SaveButton
                saving={saving}
                disabled={saving}
                saveLabel={
                  saving ? "Saving Information" : "Save Payment Method"
                }
              />
              <Button className="bordered" onClick={handleCancel} block><Icon type="close-circle-o" />Cancel</Button>
            </Col>
              </Row>
        </Form>
      </AddPaymentMethodWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      paymentCreateNew,
      paymentProductCreateNewCard,
    },
    dispatch
  );
};

export default Form.create()(connect(null, mapDispatchToProps)(AddPaymentMethod));
