import React, { Component } from "react";
import { Form, Collapse } from "antd";
import {
  TextInput,
  SaveButton,
  SelectInput,
  NumberInput,
  DatePickerInput,
} from "@ant-components/FormElements";
import moment from "moment/moment";
import { discount_types } from "../constants";
const Panel = Collapse.Panel;
import _ from "lodash";

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      hasEmptyRequiredField: false,
    };
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.data._id !== nextProps.data._id) {
      this.props.form.resetFields();
      this.setState({ data: Object.assign({}, nextProps.data) });
    }

    // if required field have not yet touched, check if required fields have value
    const requiredFields = this.props.form.getFieldsValue([
      "_id",
      "type",
      "value",
    ]);
    if (_.indexOf(_.values(requiredFields), undefined) > -1) {
      this.setState({ hasEmptyRequiredField: true });
    } else {
      this.setState({ hasEmptyRequiredField: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = Object.assign({}, this.state.data, values, {
          expired_at: values.expired_at ? values.expired_at.valueOf() : 0,
        });
        this.props.saveRequest({
          data,
          onSuccess: this.props.onSuccess,
          isNew: this.props.isNew,
        });
      }
    });
  };

  hasFieldError = () => {
    const { getFieldsError } = this.props.form;

    const fieldsError = getFieldsError();
    if (
      _.isEmpty(_.remove(_.values(fieldsError)), val => {
        return !_.isUndefined(val);
      })
    ) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { form, isLoading, isSaving, isNew, productsList } = this.props;
    const { isFieldsTouched } = form;
    const { data, hasEmptyRequiredField } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} layout="vertical">
        <Collapse activeKey={["1"]}>
          <Panel showArrow={false} header="Discount Details" key="1">
            <TextInput
              form={form}
              label="Discount ID"
              name="_id"
              required={true}
              initialValue={data._id}
              disabled={!isNew}
              min={3}
              max={30}
            />
            <TextInput
              form={form}
              label="Description"
              name="description"
              required={false}
              initialValue={data.description}
              max={256}
            />
            <SelectInput
              form={form}
              label="Type"
              name="type"
              required={true}
              list={discount_types}
              initialValue={data.type}
            />
            <NumberInput
              form={form}
              label="Value"
              name="value"
              required={true}
              sign=" "
              width="100%"
              precision={0}
              initialValue={data.value}
              min={1}
            />
            <NumberInput
              form={form}
              label="Quantity Limit"
              name="quantity_limit"
              required={false}
              sign=" "
              width="100%"
              precision={0}
              initialValue={data.quantity_limit}
              transformNonZero={true}
            />
            <NumberInput
              form={form}
              label="Quantity"
              name="quantity"
              required={false}
              sign=" "
              width="100%"
              disabled={true}
              precision={0}
              initialValue={data.quantity || 0}
              min={0}
            />
            <DatePickerInput
              form={form}
              label="Expired At"
              name="expired_at"
              required={false}
              format={"ll"}
              initialValue={
                isNew || !data.expired_at ? null : moment(data.expired_at)
              }
            />
            <SelectInput
              form={form}
              label="Products Applied"
              name="products"
              mode="multiple"
              required={false}
              list={productsList}
              tokenSeparators={[","]}
              initialValue={data.products}
            />
          </Panel>
        </Collapse>
        <SaveButton
          size="large"
          saveLabel="Save Discount"
          saving={isSaving}
          disabled={
            !isFieldsTouched() ||
            isLoading ||
            hasEmptyRequiredField ||
            this.hasFieldError()
          }
        />
      </Form>
    );
  }
}

const DiscountForm = Form.create()(EntryForm);
export default DiscountForm;
