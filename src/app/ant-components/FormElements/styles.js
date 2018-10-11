import styled from "styled-components";
import { Form } from "antd";
import {media} from "@common/styles/helpers-styles";

export const FormItem = styled(Form.Item)`
  margin-bottom: 15px !important;
  .ant-form-item-label {
    font-weight: bold;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    .ant-form-item-required:before {
      float: right;
      margin-left: 5px;
      color: rgba(0, 0, 0, 0.85);
    }

    label {
      overflow: hidden;
      white-space: normal;
      display: inline-block;
      vertical-align: middle;
      word-break: break-word;
      color: #3b475b;
      padding-right: 10px;
      font-size: 18px;
      ${media.phone`
        font-size: 16px;
      `}
      &:after {
        display: none;
      }
    }
  }
  .ant-form-explain {
    font-size: 12px;
  }
  &.inline-half {
    display: inline-block;
    width: 50%;
  }

  input {
    background-image: none !important;
    height: 44px;
    line-height: 44px;
    border-color: #dee1e5;
  }
  .ant-input-number {
    height: 100%;
  }
  .ant-select-selection {
    height: 44px;
    .ant-select-selection__rendered {
      height: inherit;
      line-height: 44px;
    }
  }
  .ant-select,
  .ant-calendar-picker {
    width: 100%;
  }
  /* Image Select */
  .form-image-select {
    button {
      display: block;
    }
    img {
      margin: 15px 0 0;
      width: 250px;
    }
  }
`;
