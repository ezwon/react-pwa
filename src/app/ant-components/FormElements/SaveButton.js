import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import { Button } from "../../modules/common/components";

const defaultStyle = { margin: "15px 0", display: "block" };
const SaveButton = ({
  saveLabel,
  saving,
  disabled,
  size,
  style = defaultStyle,
}) => (
  <Form.Item>
    <Button
      type="primary"
      htmlType="submit"
      icon="save"
      disabled={disabled}
      style={style}
      loading={saving}
      size={size}
    >
      {saveLabel || "Save"}
    </Button>
  </Form.Item>
);

SaveButton.propTypes = {
  cancelLink: PropTypes.string,
  span: PropTypes.number,
  offset: PropTypes.number,
  saveLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  saving: PropTypes.bool,
  disabled: PropTypes.bool,
};
export default SaveButton;
