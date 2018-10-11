import React, {Component} from "react";
import {Form, Row, Col, Button, message} from "antd";
import moment from "moment";

import {
  TextInput,
  ImageSelect,
  CheckInput,
  DatePickerInput,
  NumberInput,
} from "@ant-components/FormElements";

import GraphicsSelectorDialog from "./GraphicsSelectorDialog";
import {StyledCustomFieldsWrapper} from "../styles";

class EventCustomFields extends Component {

  constructor(props) {
    super(props);

    this.state = {
      customFieldGroup: "info",
      isSaving: false,
      showImageDialog: false,
      imageKeySelector: "",
      custom_fields: this.props.product.custom_fields,
      errors: {},
    };
  }

  handleChange = (key, e) => {
    let customFields = this.state.temp_custom_fields;
    const customFieldsGroup = customFields[this.state.customFieldGroup] || {};

    if (e._isAMomentObject) {
      customFieldsGroup[key] = e.format("X");
    } else {
      customFieldsGroup[key] = e.target && e.target.type === "checkbox" ?
        e.target.checked : e.target.value;
    }
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
        this.setState({isSaving: true});

        this.props.productSaveCustomFields({
          data: {
            product_id: this.props.product._id,
            fields: custom_fields,
          },
          onSuccess: () => {
            this.setState({isSaving: false}, () => {
              message.success("Event custom fields updated!");
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
            <Col span={8}>
              <TextInput
                form={form}
                label="Short Title"
                name="short_title"
                onChange={e => this.handleChange("short_title", e)}
                required={true}
                min={3}
                max={40}
                initialValue={customFields.short_title || "Short Title"}
              />
            </Col>
            <Col span={8}>
              <TextInput
                form={form}
                label="Long Title"
                name="long_title"
                onChange={e => this.handleChange("long_title", e)}
                min={3}
                max={40}
                initialValue={customFields.long_title || "Long Title"}
              />
            </Col>
            <Col span={8}>
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
            <Col span={12}>
              <TextInput
                form={form}
                label="Short Description"
                name="short_description"
                onChange={e => this.handleChange("short_description", e)}
                rows={4}
                min={10}
                max={100}
                initialValue={customFields.short_description || "Short Description"}
              />
            </Col>
            <Col span={12}>
              <TextInput
                form={form}
                label="Long Description"
                name="long_description"
                onChange={e => this.handleChange("long_description", e)}
                rows={4}
                min={10}
                max={500}
                initialValue={customFields.long_description || "Long Description"}
              />
            </Col>
          </Row>
          <Row>
            <h3>Shop Card</h3>
            <Col span={2}>
              <NumberInput
                form={form}
                label="Large"
                name="shop_card_size_lg"
                onChange={e => this.handleNumberInputChange("shop_card_size_lg", e)}
                initialValue={customFields.shop_card_size_lg || 8}
                precision={0}
                hasFormatter={false}
                min={8}
                max={24}
              />
            </Col>
            <Col span={2}>
              <NumberInput
                form={form}
                label="Medium"
                name="shop_card_size_md"
                onChange={e => this.handleNumberInputChange("shop_card_size_md", e)}
                initialValue={customFields.shop_card_size_md || 16}
                precision={0}
                hasFormatter={false}
                min={8}
                max={24}
              />
            </Col>
            <Col span={2}>
              <NumberInput
                form={form}
                label="Small"
                name="shop_card_size_xs"
                onChange={e => this.handleNumberInputChange("shop_card_size_xs", e)}
                initialValue={customFields.shop_card_size_xs || 24}
                precision={0}
                hasFormatter={false}
                min={8}
                max={24}
              />
            </Col>
            <Col span={3}>
              <TextInput
                form={form}
                label="CTA Text"
                name="shop_cta_text"
                onChange={e => this.handleChange("shop_cta_text", e)}
                initialValue={customFields.shop_cta_text || "Buy Now"}
              />
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <DatePickerInput
                form={form}
                label="Event Date"
                name="event_date"
                onChange={e => this.handleChange("event_date", e)}
                format="YYYY-MM-DD HH:mm:ss"
                showTime={{
                  format: "HH:mm:ss",
                  defaultValue: moment("00:00:00", "HH:mm:ss"),
                }}
                initialValue={
                  customFields.event_date ?
                    moment(customFields.event_date, "X") : moment(new Date)
                }
              />
            </Col>
            <Col span={16}>
              <TextInput
                form={form}
                label="Location"
                name="location"
                onChange={e => this.handleChange("location", e)}
                required={true}
                min={3}
                max={40}
                initialValue={customFields.location}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput
                form={form}
                label="Address"
                name="address"
                onChange={e => this.handleChange("address", e)}
                required={true}
                rows={4}
                min={10}
                max={300}
                initialValue={customFields.address}
              />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ImageSelect
                form={form}
                label="Shop Card Thumbnail"
                name="thumbnail_shop"
                onClick={() => {
                  this.handleShowImageSelector("thumbnail_shop");
                }}
                thumbnail={customFields.thumbnail_shop || ""}
                initialValue={customFields.thumbnail_shop || ""}
              />
            </Col>
            <Col span={6}>
              <ImageSelect
                form={form}
                label="Cart Thumbnail"
                name="thumbnail_cart"
                onClick={() => {
                  this.handleShowImageSelector("thumbnail_cart");
                }}
                thumbnail={customFields.thumbnail_cart || ""}
                initialValue={customFields.thumbnail_cart || ""}
              />
            </Col>
            <Col span={6}>
              <ImageSelect
                form={form}
                label="My Products Thumbnail"
                name="thumbnail_my_products"
                onClick={() => {
                  this.handleShowImageSelector("thumbnail_my_products");
                }}
                thumbnail={customFields.thumbnail_my_products || ""}
                initialValue={customFields.thumbnail_my_products || ""}
              />
            </Col>
            <Col span={6}>
              <ImageSelect
                form={form}
                label="Purchase Dialog Thumbnail"
                name="thumbnail_purchase_dialog"
                onClick={() => {
                  this.handleShowImageSelector("thumbnail_purchase_dialog");
                }}
                thumbnail={customFields.thumbnail_purchase_dialog || ""}
                initialValue={customFields.thumbnail_purchase_dialog || ""}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <ImageSelect
                form={form}
                label="Ticket Event Logo"
                name="ticket_event_logo"
                onClick={() => {
                  this.handleShowImageSelector("ticket_event_logo");
                }}
                thumbnail={customFields.ticket_event_logo || ""}
                initialValue={customFields.ticket_event_logo || ""}
              />
            </Col>
            <Col span={12}>
              <ImageSelect
                form={form}
                label="Ticket Side Graphics"
                name="ticket_side_graphics"
                onClick={() => {
                  this.handleShowImageSelector("ticket_side_graphics");
                }}
                thumbnail={customFields.ticket_side_graphics || ""}
                initialValue={customFields.ticket_side_graphics || ""}
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

export default Form.create()(EventCustomFields);
