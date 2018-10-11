import React, { Component } from "react";
import { Form, Row, Col } from "antd";
import { TextInput, SaveButton } from "@ant-components/FormElements";
import { ProfileFormWrapper } from "../styles";

class OthersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.saving && this.props.saving) {
      this.props.form.resetFields();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { handleFormSubmit, handleSuccess, data, form } = this.props;
    const component = this;
    form.validateFields((err, values) => {
      if (!err) {
        component.setState({ saving: true });
        handleFormSubmit({ user_metadata: values }, data.auth0, () => {
          handleSuccess("Backup Email successfully updated!");
          form.resetFields();
          component.setState({ saving: false });
        });
      }
    });
  };

  render() {
    const { form, formItemLayout, otherUserDetails } = this.props;
    const { saving } = this.state;
    return (
      <ProfileFormWrapper onSubmit={this.handleSubmit} layout="horizontal">
        <hr />
        <Row>
          <Col span={24}>
            <TextInput
              form={form}
              label="Backup Email"
              name="backup_email"
              isEmail={true}
              initialValue={
                otherUserDetails.user_metadata &&
                otherUserDetails.user_metadata.backup_email
              }
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

export default Form.create()(OthersForm);
