import React, {Component} from "react";
import {Form, Row, Col, Button, message} from "antd";
import {
  DatePickerInput,
  SelectInput,
  TextInput,
  NumberInput,
  ImageSelect,
  CheckInput,
} from "@ant-components/FormElements";
import moment from "moment";

import GraphicsSelectorDialog from "./GraphicsSelectorDialog";
import {StyledCustomFieldsWrapper} from "../styles";

class SampleCustomFields extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      customFieldGroup: "sample_custom_fields",
      isSaving: false,
      showImageDialog: false,
      imageKeySelector: "",
      custom_fields: this.props.product.custom_fields,
      errors: {},
    };
  }

  handleChange = (key, e) => {
    let {custom_fields, customFieldGroup} = this.state;

    custom_fields[customFieldGroup] = custom_fields[customFieldGroup] || {};

    if (e._isAMomentObject) {
      custom_fields[customFieldGroup][key] = e.format("X");
    } else {
      custom_fields[customFieldGroup][key] = e.target && e.target.type === "checkbox" ?
        e.target.checked : e.target.value;
    }
  };

  handleSelectInputChange = e => {
    console.log("Select Change:", e);
  };

  handleNumberInputChange = (key, val) => {
    let {custom_fields, customFieldGroup} = this.state;

    custom_fields[customFieldGroup] = custom_fields[customFieldGroup] || {};
    custom_fields[customFieldGroup][key] = val;
  };

  handleSelectImage = url => {
    let {custom_fields, customFieldGroup, imageKeySelector} = this.state;

    custom_fields[customFieldGroup] = custom_fields[customFieldGroup] || {};
    custom_fields[customFieldGroup][imageKeySelector] = url;

    this.setState({showImageDialog: false});
  };

  handleShowImageSelector = imageField => {
    this.setState({
      showImageDialog: true,
      imageKeySelector: imageField,
    });
  };

  handleHideImageSelector = () => {
    this.setState({
      showImageDialog: false,
      imageKeySelector: "",
    });
  };

  handleSubmit = () => {
    this.props.form.validateFields((err) => {
      if (!err) {
        const custom_fields = this.state.custom_fields;

        console.log("Meow:",custom_fields);

        this.setState({isSaving: true});

        this.props.productSaveCustomFields({
          data: {
            product_id: this.props.product._id,
            fields: custom_fields,
          },
          onSuccess: () => {
            this.setState({isSaving: false}, () => {
              message.success("Fields updated!");
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
      showImageDialog,
      customFieldGroup,
      custom_fields,
      isSaving,
    } = this.state;

    const sampleSelectItems = [
      {
        label: "Option 1",
        value: "Option1"
      },
      {
        label: "Option 2",
        value: "Option2"
      }
    ];

    const customFields = custom_fields[customFieldGroup] || {};
    const graphics = custom_fields.graphics || [];

    return (
      <StyledCustomFieldsWrapper>
        <Form>
          <GraphicsSelectorDialog
            visible={showImageDialog}
            handleCancel={this.handleHideImageSelector}
            handleSelectImage={this.handleSelectImage}
            graphics={graphics}
          />
          <Row>
            <Row>
              <Col span={6}>
                <ImageSelect
                  form={form}
                  label="Sample Image"
                  name="sample_image"
                  onClick={() => {
                    this.handleShowImageSelector("sample_image");
                  }}
                  thumbnail={customFields.sample_image || ""}
                  initialValue={customFields.sample_image || ""}
                />
              </Col>
            </Row>
            <Col span={12}>
              <TextInput
                form={form}
                label="Sample Text"
                name="sample_text"
                onChange={e => this.handleChange("sample_text", e)}
                required={true}
                min={3}
                max={50}
                initialValue={customFields.sample_text}
              />

              <SelectInput
                form={form}
                label="Sample Select"
                name="sample_select"
                list={sampleSelectItems}
                onChange={this.handleSelectInputChange}
                initialValue={"Option1"}
              />

              <DatePickerInput
                form={form}
                label="Sample Date"
                name="sample_date"
                onChange={e => this.handleChange("sample_date", e)}
                format="YYYY-MM-DD HH:mm:ss"
                showTime={{
                  format: "HH:mm:ss",
                  defaultValue: moment("00:00:00", "HH:mm:ss"),
                }}
                initialValue={
                  customFields.sample_date ?
                    moment(customFields.sample_date, "X") : moment(new Date)
                }
              />

              <NumberInput
                form={form}
                label="Sample Number"
                name="sample_number"
                onChange={e => this.handleNumberInputChange("sample_number", e)}
                width="100%"
                initialValue={customFields.sample_number || 0}
              />

              <CheckInput
                form={form}
                label="Sample CheckBox"
                name="sample_checkbox"
                checked={customFields.sample_checkbox}
                onChange={e => this.handleChange("sample_checkbox", e)}
              />
              <CheckInput
                form={form}
                label="Hide on Shop"
                name="hide_on_shop"
                checked={customFields.hide_on_shop}
                onChange={e => this.handleChange("hide_on_shop", e)}
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

export default Form.create()(SampleCustomFields);
