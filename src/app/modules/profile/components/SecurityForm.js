import React, { Component } from "react";
import { Form, Row, Col } from "antd";
import { TextInput, SaveButton } from "@ant-components/FormElements";
import { ProfileFormWrapper } from "../styles";

class SecurityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { data, handleFormSubmit, handleSuccess, form } = this.props;
    const component = this;
    this.setState({ saving: true });
    form.validateFields((err, values) => {
      if (!err) {
        handleFormSubmit({ password: values.password }, data.auth0, () => {
          handleSuccess("Change Password Successful!");
          form.resetFields();
          component.setState({ saving: false });
        });
      }
    });
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value) {
      form.validateFields(["password1"], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Passwords do not match");
    } else {
      callback();
    }
  };

  render() {
    const { form, formItemLayout } = this.props;
    const { saving } = this.state;

    return (
      <ProfileFormWrapper onSubmit={this.handleSubmit} layout="horizontal">
        <h1>Security Settings</h1>
        <Row>
          <Col span={24}>
            <TextInput
              form={form}
              label="New Password"
              placeholder="New Password"
              name="password"
              min={6}
              requred={true}
              type="password"
              validator={this.validateToNextPassword}
              formItemLayout={formItemLayout}
            />
          </Col>
          <Col span={24}>
            <TextInput
              form={form}
              label="Confirm Password"
              placeholder="Re-type New Password"
              name="password1"
              min={6}
              requred={true}
              type="password"
              validator={this.compareToFirstPassword}
              formItemLayout={formItemLayout}
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

export default Form.create()(SecurityForm);
