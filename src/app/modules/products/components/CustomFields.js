import React, {Component} from "react";
import {Form, Row, Col, Button, message} from "antd";
import {
  TextInput,
} from "@ant-components/FormElements";

import {StyledCustomFieldsWrapper} from "../styles";

class CustomFields extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSaving: false,
      temp_custom_fields: this.props.product.custom_fields,
      errors: {},
    };
  }


  handleChange = (key, e) => {
    let customFields = this.state.temp_custom_fields;

    customFields[key] = e.target.value;
  };

  handleSubmit = () => {
    this.props.form.validateFields((err) => {
      if (!err) {
        const custom_fields = this.state.temp_custom_fields;

        this.setState({isSaving:true});

        this.props.productSaveCustomFields({
          data: {
            product_id: this.props.product._id,
            fields: custom_fields,
          },
          onSuccess: () => {
            this.setState({isSaving:false}, ()=>{
              message.success("Custom fields updated!");
            });
          }
        });
      } else {
        message.error(err);
      }
    });
  };

  render() {
    const {
      form,
    } = this.props;

    const {
      temp_custom_fields,
      isSaving,
    } = this.state;

    return (
      <StyledCustomFieldsWrapper>
        <Form>
          <Row>
            <Col span={24}>
              <TextInput
                form={form}
                label="Templates"
                name="templates"
                onChange={e => this.handleChange("templates", e)}
                rows={5}
                min={0}
                max={1500}
                initialValue={temp_custom_fields["templates"]}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <TextInput
                form={form}
                label="Tracking"
                name="tracking"
                onChange={e => this.handleChange("tracking", e)}
                rows={5}
                min={0}
                max={1500}
                initialValue={temp_custom_fields["tracking"]}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <TextInput
                form={form}
                label="Others"
                name="others"
                onChange={e => this.handleChange("others", e)}
                rows={5}
                min={0}
                max={1500}
                initialValue={temp_custom_fields["others"]}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="primary" icon="save" loading={isSaving} onClick={this.handleSubmit}>
                  Save
              </Button>
            </Col>
          </Row>
        </Form>
      </StyledCustomFieldsWrapper>
    );
  }
}

export default Form.create()(CustomFields);
