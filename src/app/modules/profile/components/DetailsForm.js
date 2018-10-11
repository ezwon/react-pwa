import React, { Component } from "react";
import { Form, Row, Col } from "antd";
import { TextInput, SaveButton } from "@ant-components/FormElements";
import { ProfileFormWrapper } from "../styles";

class DetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.saving && this.props.saving) {
      this.props.form.resetFields();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { handleFormSubmit } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        handleFormSubmit(values);
      }
    });
  };

  render() {
    const { form, data, saving, formItemLayout } = this.props;
    return (
      <ProfileFormWrapper onSubmit={this.handleSubmit} layout="horizontal">
        <h1>Personal Details</h1>
        <Row>
          <Col span={24}>
            <TextInput
              form={form}
              label="First Name"
              placeholder="Enter First Name"
              name="first_name"
              colon={false}
              initialValue={data.first_name}
              formItemLayout={formItemLayout}
            />
          </Col>
          <Col span={24}>
            <TextInput
              form={form}
              label="Last Name"
              placeholder="Enter Last Name"
              name="last_name"
              colon={false}
              initialValue={data.last_name}
              formItemLayout={formItemLayout}
            />
          </Col>

          <Col sm={24} lg={9} />
        </Row>

        <Row>
          <Col span={24}>
            <TextInput
              form={form}
              label="Email"
              name="email"
              placeholder="email@example.com"
              colon={false}
              initialValue={data.email}
              formItemLayout={formItemLayout}
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <TextInput
              form={form}
              label="Company"
              name="company"
              placeholder="Enter Company Name"
              initialValue={data.company}
              formItemLayout={formItemLayout}
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <TextInput
              form={form}
              label="Invoice Billing Address"
              placeholder="Your Invoice Billing Address"
              name="companyAddress"
              initialValue={data.companyAddress}
              formItemLayout={formItemLayout}
              rows={5}
            />
          </Col>
        </Row>
        <SaveButton
          saving={saving}
          disabled={saving}
          saveLabel={saving ? "Updating" : "Update"}
        />
      </ProfileFormWrapper>
    );
  }
}

export default Form.create()(DetailsForm);
