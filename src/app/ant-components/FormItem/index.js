import React, { Component } from "react";
import styled from "styled-components";
import { Form } from "antd";
const FormItem = styled(Form.Item)`
  .ant-form-item-label {
    font-weight: bold;
    text-align: left;
  }
  .ant-form-item-required:before {
    position: absolute;
    right: 0;
    top: 0px;
  }
  .ant-form-explain {
    font-size: 12px;
  }
  &.inline-half {
    display: inline-block;
    width: 50%;
  }
`;

export default class AntFormItem extends Component {
  render() {
    return <FormItem {...this.props} colon={false} />;
  }
}
