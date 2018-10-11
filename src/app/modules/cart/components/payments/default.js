import React, { Component } from "react";
import { Form, Button, Row, Col } from "antd";

import { DefaultPaymentWrapper } from "../../styles";
import {
  TextInput,
  NumberInput,
} from "@ant-components/FormElements/index";

class DefaultPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoho: {},
      data: {},
      errors: {},
    };
  }

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // const zoho = values;
        values.card_number = Number(values.card_number);
        values.cvv_number = Number(values.cvv_number);
        this.props.cartConfirmBillingDetails({
          zoho: values,
          paymentType: "zoho",
          paymentActiveTab: "newCard",
        });
      } else {
        //console.log("Error on Form:", err);
      }
    });
  };

  handleChange = e => {
    const field = e.target.id;
    const data = Object.assign({}, this.state.data);
    data[field] = e.target.value;
    this.setState({ data });
  };

  render() {
    const { form, zoho } = this.props;
    const { errors } = this.state;
    return (
      <DefaultPaymentWrapper>
        <Form layout="vertical">
          <div className="new-account">
            <h2>Credit Card Details</h2>
            <TextInput
              form={form}
              label={"Card First Name"}
              name={"first_name"}
              required={true}
              onChange={this.handleChange}
              error={errors.cardFirstName}
              initialValue={zoho.first_name}
              min={2}
              max={50}
            />
            <TextInput
              form={form}
              label={"Card Last Name"}
              name={"last_name"}
              required={true}
              onChange={this.handleChange}
              error={errors.cardLastName}
              initialValue={zoho.last_name}
              min={2}
              max={50}
            />
            <TextInput
              form={form}
              label={"Credit Card Number"}
              name={"card_number"}
              required={true}
              error={errors.cardNumber}
              initialValue={String(zoho.card_number || "") || ""}
              pattern="^[0-9]+$"
              patternMessage="Card number must not contain spaces and letters"
              max={16}
              min={14}
            />
            <Row gutter={16} className="card-exp">
              <Col span={8}>
                <NumberInput
                  form={form}
                  label={"Expiry Month"}
                  name={"expiry_month"}
                  required={true}
                  hasFormatter={false}
                  sign=" "
                  precision={0}
                  error={errors.expiryMonth}
                  initialValue={zoho.expiry_month || ""}
                  min={1}
                  max={12}
                  // style={{ width: "33%" }}
                />
              </Col>
              <Col span={8}>
                <NumberInput
                  form={form}
                  label={"Expiry Year"}
                  name={"expiry_year"}
                  required={true}
                  sign=" "
                  precision={0}
                  hasFormatter={false}
                  error={errors.expiryYear}
                  initialValue={zoho.expiry_year || ""}
                  min={2018}
                />
              </Col>
              <Col span={8}>
                <TextInput
                  form={form}
                  label={"CVV"}
                  name={"cvv_number"}
                  required={true}
                  onChange={this.handleChange}
                  error={errors.cvvNumber}
                  initialValue={String(zoho.cvv_number || "") || ""}
                  min={3}
                  max={4}
                />
              </Col>
            </Row>
          </div>
        </Form>
        <Button type="primary" onClick={() => this.handleSubmit()}>
          Proceed to Billing Details
        </Button>
      </DefaultPaymentWrapper>
    );
  }
}
export default Form.create()(DefaultPayment);
