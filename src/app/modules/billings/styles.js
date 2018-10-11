import styled from "styled-components";
import { Collapse } from "antd";

export const ExtraPanel = styled.div`
  height: 600px;
  background-color: #6590fa;
  border-radius: 10px;
  padding: 90px 50px;
  background: linear-gradient(175deg, #9781f5 0%, #6590fa 100%);
  text-align: center;
  i {
    font-size: 85px;
    color: #fff;
    display: block;
  }
  h1 {
    color: #fefefe;
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 25px;
    display: block;
  }
  p {
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 40px;
  }
  button {
    box-shadow: none;
    border: none;
    background: #fff;
    color: #6c8ef9;
    font-size: 20px;
    font-weight: bold;
    line-height: 19px;
    height: 51px;
    width: 170px;
    display: block;
    margin: auto;
  }
`;

export const PageCollapse = styled(Collapse)`
  background: none !important;
  .ant-collapse-item {
    /* height: 98px; */
    border: none !important;
    border-radius: 10px;
    margin-bottom: 20px;
    &.ant-collapse-item-active {
      .ant-collapse-header {
        border-radius: 10px 10px 0 0;
      }
    }
    &:last-child {
      .ant-collapse-header {
        border-radius: 10px !important;
      }
      &.ant-collapse-item-active {
        .ant-collapse-header {
          border-radius: 10px 10px 0 0 !important;
        }
      }
    }
    .ant-collapse-header {
      height: 100%;
      padding: 0 35px !important;
      background: #fff;
      color: #3b475b !important;
      border-radius: 10px;
      font-size: 24px;
      font-weight: 600;
      line-height: 90px !important;
      outline: none;
      /* &:focus {

      } */
      .arrow {
        top: 20px !important;
        left: auto !important;
        right: 25px;
        font-size: 25px !important;
      }
    }
    .ant-collapse-content {
      background: #fff !important;
      border-radius: 0 0 10px 10px;
      padding: 15px 35px;
    }
  }
`;
export const BillingPanel = styled.div`
  .panel-header {
    .logo {
      height: 50px;
      width: 50px;
      background-color: #f1f4fc;
      display: inline-block;
      border-radius: 50%;
      vertical-align: middle;
      margin-top: -10px;
      margin-right: 35px;
    }
    span {
      display: inline-block;
    }
  }
  .success {
    color: #43bf83;
    font-weight: bold;
  }
  .error {
    color: #eb415d;
    font-weight: bold;
  }
`;
