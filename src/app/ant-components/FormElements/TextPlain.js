import React from "react";
import PropTypes from "prop-types";
import { FormItem } from "./styles";

const TextPlain = ({
  name,
  label,
  value,
  labelSpan,
  wrapperSpan,
  required,
  extra,
}) => (
  <FormItem
    label={label}
    labelCol={{ span: labelSpan || null }}
    wrapperCol={{ span: wrapperSpan || null }}
    required={required}
    extra={extra}
  >
    <span className="ant-form-text" id={name}>
      &nbsp;&nbsp;&nbsp;{value}
    </span>
  </FormItem>
);

TextPlain.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  extra: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelSpan: PropTypes.number,
  wrapperSpan: PropTypes.number,
};

export default TextPlain;
