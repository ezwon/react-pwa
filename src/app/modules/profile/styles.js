import styled from "styled-components";
import { Form } from "antd";
import { media } from "@common/styles/helpers-styles";

export const ProfileBarWrapper = styled.div`
  text-align: center;
  padding: 40px 0;
  div {
    position: relative;
  }
  .profile-image {
    margin: 25px auto 0;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    &:before {
      content: "";
      width: 145px;
      height: 145px;
      position: absolute;
      top: -10px;
      left: -10px;
      border-radius: 50%;
      border: 2px solid #eef0f1;
    }
    .ant-spin {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      padding-top: 44%;
      background: #c1c1c16e;
      border-radius: 50%;
    }
  }
  button {
    position: absolute;
    bottom: -20px;
    margin-left: 20px !important;
    border-radius: 50% !important;
    width: 50px;
    height: 50px !important;
    font-size: 25px;
    background: #6591fa !important;
    color: #fff !important;
    overflow: hidden;
  }
  input[type="file"] {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    &::-webkit-file-upload-button {
      height: inherit;
    }
  }
  h1,
  h2,
  h3 {
    color: #38455b;
  }
  h2 {
    margin: 15px 0 0;
  }
  h3 {
    font-size: 18px;
  }
  span {
    display: block;
    margin-bottom: 50px;
    font-size: 17px;
    color: #a4b2c9;
    max-width: 250px;
    margin: 0 auto 50px;
  }
`;

export const ProfileFormWrapper = styled(Form)`
  h1 {
    color: #95a6c1;
    font-weight: 400;
    margin-bottom: 45px;
    ${media.phone`
    text-align: center;
    `};
  }
  .ant-btn-secondary {
    padding: 0 30px;
  }
  .ant-btn-primary {
    height: 50px;
    width: 175px;
    margin: 15px 0 0 auto !important;
    padding: 0 30px;
    font-size: 17px;
    display: block;
    ${media.phone`
    width: 100%;
    `};
  }
`;

export const Wrapper = styled.div`
  hr {
    border: 0;
    height: 1px;
    background: #e6eaf2;
    margin: 50px 2px;
  }
  ${media.tablet`
    section {
      width: 100%!important;
      margin: 15px 0!important;
      padding: 20px;
    }
  `};
`;
