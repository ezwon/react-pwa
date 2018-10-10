import React, { Component } from "react";
import { Switch } from "antd";
import styled from "styled-components";
const AppSwitch = styled(Switch)`
  background-color: #f1f1f1 !important;
  height: 27px !important;
  width: 61px !important;

  &::after,
  &::before {
    top: -1px !important;
    width: 27px !important;
    height: 27px !important;
  }
  &::after {
    margin-left: -27px !important;
    background-color: #e0e0e0 !important;
    box-shadow: none !important;
    left: 27px !important;
  }
  &.ant-switch-checked {
    &:after {
      left: 100% !important;
      background-color: #43bf83 !important;
    }
  }
`;
export default class AntSwitch extends Component {
  render() {
    return <AppSwitch {...this.props} />;
  }
}
