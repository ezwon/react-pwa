import { Button } from "antd";
import styled from "styled-components";

const AppButton = styled(Button)`
  margin: 0 12px 12px 0;
  border-radius: 8px;
  height: 44px;
  font-weight: 500;
  font-family: "Lato";
  &.ant-btn-danger {
    background: #f1f1f1;
    color: #eb6b77;
    border-color: #eb6b77;
  }
  &.ant-btn-secondary {
    border: 2px solid #6591fa;
    color: #6591fa;
  }
  &.ant-btn-primary:not([disabled]) {
    background-color: #6591fa;
    border-color: #6591fa;
    box-shadow: 0px 5px 19px #6591fad4;
  }
  &.ant-btn-icon-only {
    width: 44px;
    border-radius: 50%;
  }
  &.ant-btn-icon-only:not([disabled]) {
    color: #97b4fb;
    background: #f1f4fc;
    border-color: #f1f4fc;
    box-shadow: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export default AppButton;
