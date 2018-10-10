import React from "react";
import PropTypes from "prop-types";
import { DatePicker } from "antd";
import { FormItem } from "./styles";

const DatePickerInput = ({
  form,
  name,
  label,
  required,
  placeholder,
  initialValue,
  labelSpan,
  wrapperSpan,
  extra,
  help,
  validateStatus,
  hasFeedback,
  error,
  onChange,
  format,
  showTime,
}) => {
  const status = error ? "error" : validateStatus;
  const helpMessage = error || help;
  return (
    <FormItem
      label={label}
      labelCol={{ span: labelSpan || null }}
      wrapperCol={{ span: wrapperSpan || null }}
      validateStatus={status}
      help={helpMessage}
      extra={extra}
      hasFeedback={hasFeedback}
    >
      {form.getFieldDecorator(name, {
        initialValue,
        rules: [{ required, message: `${label} is required.` }],
      })(<DatePicker placeholder={placeholder} onChange={onChange} format={format} showTime={showTime} />)}
    </FormItem>
  );
};

DatePickerInput.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  initialValue: PropTypes.object,
  help: PropTypes.string,
  extra: PropTypes.string,
  validateStatus: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  hasFeedback: PropTypes.bool,
  labelSpan: PropTypes.number,
  wrapperSpan: PropTypes.number,
};

export default DatePickerInput;
