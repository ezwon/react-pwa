import styled, {keyframes} from "styled-components";
import {Row, Steps} from "antd";
import AppCard from "@ant-components/Section";
import Mastercard from "@resources/images/icons/cc/mastercard.svg";
import Visa from "@resources/images/icons/cc/visa.svg";
import Amex from "@resources/images/icons/cc/amex.svg";
import DinnersClub from "@resources/images/icons/cc/dinersclub.svg";
import Discover from "@resources/images/icons/cc/discover.svg";
import {media , color, position, fontFamily} from "@common/styles/helpers-styles";

const animateScale = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export const HeadingText = styled.h1`
  display: none;
  ${media.phone`
    display: block;
    padding: 15px;
    height: 45px;
    margin: 0;
    color: #454F5B;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 15px;
    box-shadow: 0 -2px 37px 0 rgba(0,0,0,0.16);
    background: ${color.white};
  `}
`;

export const CartCard = styled(AppCard)`
  box-shadow: 0 6px 40px 0 rgba(0, 0, 0, 0.07);
  max-width: 1233px;
  border-radius: 5px 5px 0 0;
  margin: 50px auto;
  height: 100%;
  min-height: 700px;
  position: relative;
  ${media.laptopMmd`
    max-width: 1000px;
  `}
  ${media.laptopSm`
    margin: 0;
    border: none;
    padding: 0;
  `}
  button {
    font-size: 20px;
    font-weight: bold;
    line-height: 15px;
    border-radius: 0;
    height: 60px;
    width: 190px;
    margin: 0 10px 10px;
    &.ant-btn-primary {
      background: #6590fa;
    }
    &.ant-btn-secondary {
      border: 4px solid #6590fa;
      color: #6590fa;
    }
  }
  
  input {
    height: 64px;
    background-color: #fafafa;
    border: 1px solid #dddddd;
    border-radius: 0;
    padding: 10px 10px;
    font-size: 18px;
    ${media.laptopSm`
      font-size: 15px;
      padding: 15px;
      height: 50px;
    `}
  }
  
  textarea {
    height: 64px;
    background-color: #fafafa;
    border: 1px solid #dddddd;
    border-radius: 0;
    padding: 10px 10px;
    font-size: 18px;
    ${media.laptopSm`

      font-size: 15px;
      padding: 15px;
      height: 50px;
    `}
  }
  
  .styled-div_cart-border {
    background: linear-gradient(270deg, #6592FA 0%, #9882F5 100%);
    border-radius: 5px 5px 0 0;
    height: 9px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    ${media.laptopMd`
      display: none;
    `}
  }
  .ant-btn-secondary.back {
    border: 0;
    color: #6590fa;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    position: absolute;
    height: auto;
    padding: 0;
    width: auto;
    ${media.laptopSm`
      top: 12px;
    `}
    ${media.phone`
      position: absolute;
      text-align: left;
      margin: 0!important;
      top: 12px;
      background: none;
      color: ${color.landingblue};
      font-size: 16px;
    `}
    &.-mobile{
      display: none;
      ${media.phone`
        display: block;
      `}
    }
  }
  .process {
    text-align: center;
    padding: 200px 0 20px;
    ${media.laptopSm`
      padding-top: 50%;
    `}
    h2 {
      color: #454f5b;
      font-size: 30px;
      font-weight: bold;
      line-height: 36px;
      text-align: center;
      margin-bottom: 32px;
      padding-top: 150px;
    }
  }
  .processing {
    text-align: center;
    margin-top: 170px;
    ${media.laptopSm`
      margin-top: 50%;
      transform: translateY(-50%);
    `}
    i {
      font-size: 60px;
      color: #6590fa;
      position: relative;
      z-index: 1;
      &:after {
        content: "";
        background: #f0f5ff;
        width: 110px;
        height: 110px;
        position: absolute;
        top: -25px;
        left: -25px;
        right: 0;
        z-index: -1;
        border-radius: 50%;
        animation: ${animateScale} 1s linear infinite;
      }
    }
    h2 {
      padding: 40px 0 0;
      color: #959faa;
      font-size: 24px;
      font-weight: 900;
      line-height: 33px;
    }
  }
`;

export const Stepper = styled(Steps)`
  font-family: "Lato" !important;
  max-width: 915px;
  display: flex;
  margin: auto !important;
  ${media.laptopSm`
    display: none!important;
  `}
  
  // &.ant-steps-dot {
  //   .ant-steps-item-finish {
  //     .ant-steps-icon-dot:before {
  //       display: block;
  //       content: "\\E632";
  //       font-family: "anticon" !important;
  //       color: white;
  //       font-size: 15px;
  //       line-height: 28px;
  //       background: ${color.network};
  //       border-radius: 50%;
  //     }
  //   }
  //   .ant-steps-item {
  //     .ant-steps-item-content {
  //       margin-top: 40px;
  //       width: 160px;
  //       .ant-steps-item-title {
  //         color: #454f5b;
  //         font-family: Lato;
  //         font-size: 20px;
  //         font-weight: bold;
  //         line-height: 24px;
  //         letter-spacing: 1px;
  //       }
  //     }
  //   }
  //   .ant-steps-item-process {
  //     .ant-steps-item-icon {
  //       width: 28px;
  //       height: 28px;
  //       line-height: 28px;
  //       .ant-steps-icon-dot {
  //         border: 3px solid #6590fa;
  //         background-color: #ffffff;
  //         top: 0px;
  //       }
  //     }
  //   }
  //   .ant-steps-item-wait {
  //     .ant-steps-item-icon {
  //       .ant-steps-icon-dot {
  //         border: 3px solid #C5CED8;
  //         background-color: #ffffff;
  //       }
  //     }
  //     .ant-steps-item-content .ant-steps-item-title {
  //       color: #C5CED8;
  //     }
  //   }
  //   .ant-steps-item-tail {
  //     top: 13px;
  //     height: 2px;
  //     margin-left: 0;
  //     &:after {
  //       background: #C5CED8;
  //       width: calc(100% - 0px);
  //       margin-left: 80px;
  //       height: 2px;
  //     }
  //   }
  //   .ant-steps-item-icon {
  //     width: 28px;
  //     height: 28px;
  //     line-height: 28px;
  //     &:after {
  //       height: 56px;
  //     }
  //   }
  // }
  
`;

export const AccountForm = styled(Row)`
  max-width: 600px;
  margin: 0 auto !important;
  h2 {
    color: #454f5b;
    font-size: 30px;
    font-weight: bold;
    line-height: 36px;
    text-align: center;
    margin-bottom: 32px;
    font-family: Lato;
    letter-spacing: 1px;
    ${media.laptopSm`
      font-size: 18px;
      line-height: 18px;
      margin-bottom: 20px;
    `}
  }

  button {
    display: block;
    margin: 0 auto 0 !important;
    width: 100%;
    ${media.laptopSm`
      margin: auto!important;
      width: 100%;
      font-size: 17px;
    `}
  }
  .ant-form-item-label {
    display: none;
    label{
      font-size: 18px;
    }
  }
  .divider {
    &:before {
      position: absolute;
      content: "";
      height: 1px;
      background: #C5CED8;
      width: calc(50% - 30px);
      right: 0;
    }
    &:after {
      content: "";
      position: absolute;
      height: 1px;
      width: calc(50% - 30px);
      background: #C5CED8;
      left: 0;
      top: 0;
    }
  }
  .or {
    position: absolute;
    top: 50%;
    color: #454f5b;
    font-family: Lato;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    margin-left: -8px;
    margin-top: -15px;
  }
`;

export const AccountDetailsWrapper = styled.div`
  padding: 150px 0;
  ${media.laptopSm`
    padding: 40px 20px;
  `}
  /* Hides cart text input */
  .styled-text-input_cart {
    margin-bottom: 20px !important;
  }
  .hidden {
    display: none;
  }
  .styled-div_not-loggedin_shop-form {
    max-width: 425px;
    margin: 0 auto;
    button {
      font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 400;
    }
  }
  .new-account {
    max-width: 750px;
    display: block;
    margin: auto;
    text-align: center;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    h2 {
      color: #454f5b;
      font-size: 30px;
      font-weight: bold;
      line-height: 36px;
      ${media.phone`
        font-size: 16px;
      `}
    }
    p {
      color: #a5aeb7;
      font-size: 18px;
      line-height: 30px;
      max-width: 575px;
      margin: 30px auto;
      ${media.phone`
        font-size: 16px;
        margin: 0 auto 20px;
        line-height: 18px;
      `}
      .click {
        color: #6590fa;
        cursor: pointer;
      }
      .email {
        color: #6590fa;
      }
    }
    button {
      width: auto;
      font-weight: 400;
      height: 69px;
      padding: 0 30px;
      ${media.phone`
        width: 100%;
        margin: 0;
      `}
    }
    .ant-form-item-required {
      ::before  {
        display: none;
      }
    }
  }
  .existing-account {
    text-align: center;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    .email {
      color: #6590fa;
    }
    h2 {
      color: #454f5b;
      font-size: 30px;
      font-weight: bold;
      line-height: 36px;
    }
    p {
      color: #a5aeb7;
      font-size: 18px;
      line-height: 30px;
      max-width: 450px;
      display: block;
      margin: 20px auto;
    }
    button {
      width: 284px;
      margin: 0 10px;
      font-weight: 400;
      ${media.tablet`
        margin: 10px;
      `}
    }
    i {
      font-size: 100px;
      color: #6590fa;
      padding: 0 0 20px;
    }
  }
  .ant-input{
    border-radius: 0;
    padding: 10px 15px;
  }
  .col-divider{
    text-align: center;
    margin: 60px 0;
  }
`;

export const LoggedInUserContainer = styled.div`
  text-align: center;
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  ${media.laptopSm`
    button {
      width: 100%;
      margin: 0 0 10px !important;
      font-weight: 400;
    }
  `}
  h2 {
    color: #474f5a;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 10px;
    ${media.phone`
      font-size: 16px;
      line-height: 19px;
    `}
    span {
      color: #719afb;
      font-size: 30px;
      ${media.laptopSm`
        display: block;
        padding: 10px 0;
      `}
      ${media.phone`
        font-size: 25px;
        line-height: 30px;
      `}
    }
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 10px 0 5px;
    }
  }
  p {
    color: #a5aeb7;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 20px;
    ${media.phone`
      font-size: 14px;
    `}
  }
  button {
    display: inline-block;
    margin: 0 10px;
  }
  ul {
    padding: 0;
    margin: 0 0 40px;
    list-style: none;
    li {
      color: #7d8690;
      font-size: 20px;
      padding: 20px;
      display: inline-block;
      border: 1px solid #7d8690;
      border-radius: 0;
      margin: 10px 15px;
    }
  }

  ._styled-div_product-logo_wrapper {
    max-width: 600px;
    margin: 0 auto 40px;
    display: block;
    img {
      height: 100%;
      width: 100%;
      max-width: 120px;
      margin: 0 auto;
    }
  }

`;

export const CartItemsWrapper = styled.div`
  padding: 120px 0;
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  ${media.laptopSm`
    padding: 20px;
  `}
  ${media.phone`
    padding: 20px 0;
  `}
  h2,
  h3 {
    color: #454f5b;
    font-size: 30px;
    font-weight: bold;
    line-height: 36px;
    margin: 0 0 40px;
    text-align: center;
  }
  h3 {
    margin: auto auto 10px;
  }
  p {
    color: #a5aeb7;
    font-size: 18px;
    text-align: center;
  }
  button {
    display: block;
    width: 220px;
    margin: 25px auto !important;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  img {
    &.styled-img_cart-icon {
      margin: 10px auto;
      display: block;
    }
  }

  .ant-btn-secondary.back{
    ${media.phone`
      left: 20px;
    `}
  }

  .styled-div_cart-item_form-header {
    max-width: 950px;
    margin: 0 auto 40px;
    position: relative;
    ${media.phone`
      margin: 0 auto;
      position: static;
    `}
    h2 {
       margin: 0;
       font-family: Lato;
       line-height: 40px;
       span {
        color: ${color.network};
       }
       ${media.phone`
          font-size: 18px;
          margin: 0 0 20px;
      `}
    }
    button {
      transition: 0.15s all;
      display: block;
      font-family: Lato;
      width: 220px;
      text-align: left;
      line-height: 50px;
      margin: 0 !important;
      letter-spacing: 1px;
      &:hover {
        transition: 0.15s all;
        cursor: pointer;
        opacity: 0.8;
      }
      ${media.tablet`
          line-height: 1.7;
      `}
      i {
        &.anticon-left {
          top: 1px;
          position: relative;
        }
      }
    }
  }

  .item-quantity{
    .ant-form-item-label{
      display: none;
    }
  }

  .cart-icon {
    font-size: 150px;
    color: #6590fa;
    text-align: center;
    display: block;
  }
  .actions {
    max-width: 950px;
    margin: auto;
    ${media.laptopSm`
      button {
        width: 100%!important;
      }
    `}
    ${media.phone`
      padding: 0 20px;
    `}
    button {
      margin: 25px 0 25px auto !important;
      width: auto;
      font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      letter-spacing: 1px;
    }
  }
  .price-container {
    h4 {
      color: #454f5b;
      font-size: 24px;
      font-weight: bold;
      line-height: 29px;
    }
    span {
      color: #959faa;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }
    &.-mobile{
      display: none;
      ${media.laptopSm`
        display: block;
        margin-top: 0;
        margin-bottom: 20px;
      `}
    }
  }
`;

export const CartItem = styled.div`
  max-width: 950px;
  margin: 0 auto 15px;
  padding: 57px 75px;
  border: 2px solid rgba(151, 151, 151, 0.25);
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 19px 0 rgba(26, 135, 183, 0);
  margin-bottom: 20px;
  ${media.laptopSm`
    border: 0;
    padding: 0;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  button {
    width: 100%;
  }
  `} h1 {
    color: #454f5b;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
  p {
  }
  .avatar {
    width: 101px;
    height: 101px;
    border-radius: 50%;
    background: rgba(217, 37, 44, 0.09);
    margin: 0 auto 20px;
  }
  .styled-div_cart_product-details {
    padding-bottom: 50px;
    ${media.phone`
      padding: 0 10px;
    `}
    ._cart_product-details_block {
      max-width: 450px;
      ${media.phone`
        max-width: 250px;
        margin-top: 0;
        padding-right: 10px;
      `}
    }
    h5 {
      color: #454F5B;
      text-transform: uppercase;
      font-family: Lato;
      font-size: 15px;
      font-weight: bold;
      line-height: 18px;
      margin-bottom: 50px;
      ${media.phone`
        margin-bottom: 10px;
      `}
    }
    h1 {
      color: #454F5B;
      font-family: Lato;
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 0.63px;
      ${media.tablet`
        font-size: 18px;
        line-height: 22px;
        text-align: left;
      `}
      ${media.phone`
        font-size: 18px;
        margin-bottom: 0;
      `}
    }
    p {
      color: #A5AEB7;
      font-family: Lato;
      font-size: 18px;
      line-height: 24px;
      text-align: left;
      font-weight: 400;
      margin: 10px 0;
      ${media.phone`
        font-size: 14px;
      `}
    }
    h4 {
      color: #454f5b;
      font-family: Lato;
      font-size: 24px;
      font-weight: bold;
      line-height: 29px;
      font-family: Lato;
      letter-spacing: 0.6px;
      margin-bottom: 15px;
    }
    span {
      color: #959FAA;	font-family: Lato;	font-size: 14px;	line-height: 17px;
      ${media.phone`
        font-size: 12px;
      `}
    }
    ul {
      margin-left: 30px;
      li {
        color: #A5AEB7;
        font-family: Lato;
        font-size: 18px;
        line-height: 24px;
        text-align: left;
        font-weight: 400;
        ${media.phone`
          font-size: 14px;
        `}
      }
    }
  }
  .styled-div_cart_product-details_add-ons {
    background: #F1F4FC;
    padding: 40px;
    padding-top: 50px;
    ${media.phone`
      padding: 20px;
      margin: 20px 10px;
    `}
    .styled-div_cart_number-input_wrapper {
      ${media.phone`
        margin-top: 0;
      `}
      .ant-input-number {
        height: 39px;
      }
    }
    ._cart_product-details_add-ons_block {
        max-width: 450px;
        ${media.phone`
          margin-top: 0;
          padding-right: 10px;
        `}
      }
      h5 {
        color: #454F5B;
        text-transform: uppercase;
        font-family: Lato;
        font-size: 15px;
        font-weight: bold;
        line-height: 18px;
        margin-bottom: 50px;
        ${media.phone`
          font-size: 14px;
          margin-bottom: 15px;
        `}
      }
      h1 {
        color: #454F5B;
        font-family: Lato;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0.5px;
        line-height: 24px;
        ${media.phone`
          font-size: 14px;
          line-height: 22px;
          text-align: left;
        `}
      }
      h4 {
        color: #454f5b;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
        font-family: Lato;
        letter-spacing: 0.6px;
        margin-bottom: 6px;
      }
      span {
        color: #959FAA;	font-family: Lato;	font-size: 14px;	line-height: 17px;
      }
      p {
        color: #A5AEB7;
        font-family: Lato;
        font-size: 18px;
        line-height: 22px;
        text-align: left;
        font-weight: 400;
        margin: 10px 0 30px;
        ${media.phone`
          font-size: 12px;
          margin: 10px 0 0;
        `}
      }
      ul {
        margin-left: 30px;
        li {
          color: #A5AEB7;
          font-family: Lato;
          font-size: 18px;
          line-height: 22px;
          text-align: left;
          font-weight: 400;
        }
      }
  }
  .styled-div_cart_number-input_wrapper {
    ${media.tablet`
      margin-top: 30px;
    `}
    ${media.phone`
      margin-top: 0;
    `}
    .ant-input-number {
      height: 40px;
      width: 63px;
      margin-left: 1px;
      .ant-input-number-handler-wrap {
        opacity: 1;
        height: 99%;
      }
      input {
        padding: 0 10px 0 10px;
        height: 37px;
        border: 1px solid transparent;
      }
    }
  }
  .price-container {
    ${media.phone`
      display: none;
    `}
    h4 {
      color: #454f5b;
      font-size: 24px;
      font-weight: bold;
      line-height: 29px;
      ${media.phone`
        color: #6590FA;
        font-size: 18px;
        margin: 0;
      `}
    }
    span {
      color: #959faa;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }
    i {
      float: right;
      font-size: 15px;
      color: #6590fa;
      font-weight: bold;
    }
    &.-mobile{
      display: none;
      ${media.phone`
        display: block;
        margin-top: 0;
        margin-bottom: 20px;
      `}
    }
    &.-mobile{
      display: none;
      ${media.phone`
        display: block;
        margin-top: 0;
        margin-bottom: 20px;
      `}
    }
  }
  .ant-checkbox-group {
    margin: 10px 0;
    .ant-checkbox-wrapper {
      font-size: 16px;
      color: #a5aeb7;
      display: block;
    }
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    background-color: #648ffa;
  }
`;

export const InvoiceDetailsWrapper = styled.div`
  padding: 120px 0;
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  ${media.laptopSm`
    padding: 20px;
  `}
  h2,
  h3 {
    color: #454f5b;
    font-size: 30px;
    font-weight: bold;
    line-height: 36px;
    margin: 0 0 40px;
    text-align: center;
  }
  h3 {
    margin: auto auto 10px;
  }
  p {
    color: #a5aeb7;
    font-size: 18px;
    text-align: center;
  }
  button {
    display: block;
    width: 220px;
    margin: 25px auto !important;
    font-weight: 400;
  }
  img {
    &.styled-img_cart-icon {
      margin: 10px auto;
      display: block;
    }
  }

  .styled-div_cart-item_form-header {
    max-width: 950px;
    margin: 0 auto 40px;
    position: relative;
    h2 {
       margin: 0;
       font-family: Lato;
       line-height: 40px;
       span {
        color: #A5AEB7;
        font-size: 20px;
        background: #F5F5F6;
        padding: 5px 15px;
        &.invoice-amt{
          background: transparent;
          display: block;
          color: #6590FA;
          font-size: 30px;
          padding: 0;
        }
       }
       ${media.tablet`
          margin-top: 20px;
      `}
      ${media.phone`
        font-size: 18px;
        margin-bottom: 20px;
      `}
    }
    button {
      transition: 0.15s all;
      display: block;
      font-family: Lato;
      width: 220px;
      text-align: left;
      line-height: 50px;
      margin: 0 !important;
      &:hover {
        transition: 0.15s all;
        cursor: pointer;
        opacity: 0.8;
      }
      ${media.tablet`
          line-height: 1.7;
      `}
    }
    .back{
      ${media.phone`
        display: none;
      `}
    }
  }

  .item-quantity{
    .ant-form-item-label{
      display: none;
    }
  }

  .cart-icon {
    font-size: 150px;
    color: #6590fa;
    text-align: center;
    display: block;
  }
  .actions {
    max-width: 950px;
    margin: auto;
    ${media.laptopSm`
      button {
        width: 100%!important;
      }
    `}
    button {
      margin: 25px 0 25px auto !important;
      width: auto;
    }
  }
  .price-container {
    h4 {
      color: #454f5b;
      font-size: 24px;
      font-weight: bold;
      line-height: 29px;
    }
    span {
      color: #959faa;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }
  }
`;

export const InvoiceItem = styled.div`
  max-width: 950px;
  margin: 0 auto 15px;
  padding: 57px 75px;
  border: 2px solid rgba(151, 151, 151, 0.25) !important;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 19px 0 rgba(26, 135, 183, 0);
  margin-bottom: 20px;
  ${media.laptopSm`
  padding: 30px;
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  h1, p {
    text-align: center;
  }
  button {
    width: 100%;
  }
  `} h1 {
    color: #454f5b;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
  p {
  }
  .avatar {
    width: 101px;
    height: 101px;
    border-radius: 50%;
    background: rgba(217, 37, 44, 0.09);
    margin: 0 auto 20px;
  }
  .styled-div_cart_product-details {
    padding-bottom: 50px;
    ${media.phone`
      padding-bottom: 20px;
    `}
    ._cart_product-details_block {
      max-width: 450px;
      ${media.phone`
        max-width: 250px;
        margin-top: 0;
        padding-right: 10px;
      `}
    }
    h5 {
      color: #454F5B;
      text-transform: uppercase;
      font-family: Lato;
      font-size: 15px;
      font-weight: bold;
      line-height: 18px;
      margin-bottom: 50px;
      ${media.phone`
        font-size: 18px;
        margin-bottom: 20px;
      `}
    }
    h1 {
      color: #454F5B;
      font-family: Lato;
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 0.63px;
      ${media.tablet`
        font-size: 18px;
        line-height: 22px;
        text-align: left;
      `}
      ${media.phone`
        font-size: 15px;
      `}
    }
    p {
      color: #A5AEB7;
      font-family: Lato;
      font-size: 18px;
      line-height: 24px;
      text-align: left;
      font-weight: 300;
      margin: 20px 0;
      ${media.phone`
        font-size: 14px;
      `}
    }
    h4 {
      color: #454f5b;
      font-size: 24px;
      font-weight: bold;
      line-height: 29px;
      font-family: Lato;
      margin-bottom: 6px;
    }
    span {
      color: #959FAA;	font-family: Lato;	font-size: 14px;	line-height: 17px;
    }
    ul {
      margin-left: 30px;
      li {
        color: #A5AEB7;
        font-family: Lato;
        font-size: 18px;
        line-height: 24px;
        text-align: left;
        font-weight: 300;
        ${media.laptopSm`
          font-size: 14px;
        `}
      }
    }
  }
  .styled-div_cart_product-details_add-ons {
    border-top: 1px solid #e5e5e5;
    padding: 40px 40px 20px;
    .styled-div_cart_number-input_wrapper {
      .ant-input-number {
        height: 39px;
      }
    }
    ._cart_product-details_add-ons_block {
        max-width: 450px;
        ${media.tablet`
          margin-top: 20px;
        `}
        ${media.phone`
          margin-top: 0;
        `}
      }
      h5 {
        color: #454F5B;
        text-transform: uppercase;
        font-family: Lato;
        font-size: 15px;
        font-weight: bold;
        line-height: 18px;
        margin-bottom: 50px;
      }
      h1 {
        color: #454F5B;
        font-family: Lato;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0.5px;
        line-height: 24px;
        ${media.tablet`
          line-height: 22px;
          text-align: left;
        `}
        ${media.phone`
          font-size: 14px;
        `}
      }
      h4 {
        color: #454f5b;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
        font-family: Lato;
        letter-spacing: 0.6px;
        margin-bottom: 6px;
      }
      span {
        color: #959FAA;	font-family: Lato;	font-size: 14px;	line-height: 17px;
      }
      p {
        color: #A5AEB7;
        font-family: Lato;
        font-size: 18px;
        line-height: 24px;
        text-align: left;
        font-weight: 300;
        margin: 10px 0 30px;
        ${media.phone`
          font-size: 12px;
        `}
      }
      ul {
        margin-left: 30px;
        li {
          color: #A5AEB7;
          font-family: Lato;
          font-size: 18px;
          line-height: 24px;
          text-align: left;
          font-weight: 300;
        }
      }
  }
  .styled-div_cart_number-input_wrapper {
    ${media.tablet`
      margin-top: 30px;
    `}
    .ant-input-number {
      height: 40px;
      width: 63px;
      margin-left: 1px;
      .ant-input-number-handler-wrap {
        opacity: 1;
        height: 99%;
      }
      input {
        padding: 0 10px 0 10px;
        height: 37px;
        border: 1px solid transparent;
      }
    }
  }
  .price-container {
    ${media.tablet`
      margin-top: 30px;
    `}
    h4 {
      color: #454f5b;
      font-size: 24px;
      font-weight: bold;
      line-height: 29px;
    }
    span {
      color: #959faa;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }
    i {
      float: right;
      font-size: 15px;
      color: #6590fa;
      font-weight: bold;
    }
    &.-mobile{
      display: none;
      ${media.phone`
        display: block;
        margin-top: 0;
        margin-bottom: 20px;
      `}
    }
  }
  .ant-checkbox-group {
    margin: 10px 0;
    .ant-checkbox-wrapper {
      font-size: 16px;
      color: #a5aeb7;
      display: block;
    }
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    background-color: #648ffa;
  }
`;

export const BillingDetailsWrapper = styled.div`
  padding: 120px 0;
  max-width: 950px;
  margin: auto;
  ${media.laptopSm`
    padding: 20px;
  `}
  .back {
    text-align: left;
  }
  i {
    &.anticon-left {
      top: 1px;
      position: relative;
    }
  }
  .styled-div_cart-item_form-header {
    max-width: 950px;
    margin: 0 auto 40px;
    ${media.phone`
      margin: 0;
    `}
    h2 {
       margin: 0;
       font-family: Lato;
       line-height: 40px;
       span {
        color: ${color.network};
       }
       ${media.tablet`
          margin-top: 20px;
      `}
    }
    button {
      transition: 0.15s all;
      display: block;
      font-family: Lato;
      width: 220px;
      text-align: left;
      line-height: 50px;
      margin: 0 !important;
      letter-spacing: 1px;
      &:hover {
        transition: 0.15s all;
        cursor: pointer;
        opacity: 0.8;
      }
      i {
        &.anticon-left {
          top: 1px;
          position: relative;
        }
      }
      ${media.tablet`
          line-height: 1.7;
      `}
    }
  }
  .styled-div_billing-details_wrapper {
    border-bottom: 1px solid #E5E5E5;
    width: 100%;
    max-width: 800px;
    margin: 40px auto;
    padding-bottom: 40px;
    ${media.phone`
      margin: 21px auto;
    `}
    &._button-wrapper {
      margin: 0 auto;
      border: 0;
      ${media.phone`
        border: 0;
      `}
      ._button-wrapper-text {
        float: right;
        ${media.tablet`
          float: none;
        `}
        p {
          text-align: right;
          margin-bottom: 10px;
          color: rgba(0, 0, 0, 0.65);
          font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          ${media.tablet`
           text-align: left;
          `}
        }
        button {
          margin: 0 !important;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.6px;
        }
      }
      button {
        ${media.phone`
          margin-top: 20px !important;
        `}
      }
    }
    h2 {
      color: ${color.network};
      font-size: 25px;
      font-weight: bold;
      line-height: 30px;
      font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      margin-bottom: 10px;
      ${media.phone`
        text-align: center;
        font-size: 16px;
        line-height: normal;
      `}
    }
    p {
      margin-bottom: 40px;
      ${media.phone`
        text-align: center;
        margin-bottom: 20px;
      `}
    }
    .ant-form-item{
      ${media.phone`
        padding: 0;
        margiin-bottom: 5px !important;
      `}
    }
    .ant-form-item-label {
      ${media.phone`
        padding: 0 0 5px;
      `}
      label {
        font-size: 18px;
        line-height: 22px;
        font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin-bottom: 10px;
        ${media.phone`
          font-size: 14px;
          margin-bottom: 0;
        `}
      }
    }
    .card-exp{
      .ant-form-item-label {
        label {
          ${media.phone`
            height: 44px;
          `}
        }
      }
    }
    .new-account{
      h2{
        margin-bottom: 30px;
      }
    }
  }
  .btn-tab {
    margin-top: 70px;
    text-align: center;
    ${media.laptopSm`
    margin: 10px 0 20px;
    > div {
      padding: 0 5px!important;
    }
    button {
      i {
        display: block;
        font-size: 18px;
      }
      span {
        margin: 0;
        margin-top: 5px;
        font-size: 13px
        display: block;
      }
    }
    `} > div {
      padding: 10px;
    }
    ${media.phone`
      margin: 10px 0;
    `}
    button {
      height: 74px;
      width: 100%;
      border-radius: 5px;
      color: #454f5b;
      font-size: 15px;
      font-weight: bold;
      line-height: 22px;
      margin: 0 !important;
      border: 2px solid rgba(151, 151, 151, 0.25);
      box-shadow: 0 2px 19px 0 rgba(26, 135, 183, 0);
      &.active {
        border: 2px solid #6590fa;
        i {
          color: #6590fa;
        }
      }
    }
  }
  .container {
    padding: 10px;
    ${media.laptopSm`
    padding: 0;
    `};
  }
  .hidden {
    display: none;
  }
`;

export const DefaultPaymentWrapper = styled.div`
  padding: 0;
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  ${media.laptopSm`
    padding: 20px 0;
    button {
      width: 100%!important;
      margin: 0!important;
      font-weight: 400;
      letter-spacing: 1px;
      font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  `}
  button {
    margin: 35px 0 0 auto;
    display: block;
    width: auto;
    min-width: 190px;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .selection-container {
    cursor: pointer;
    border: 1px solid rgba(151, 151, 151, 0.25);
    border-radius: 10px;
    &.selected {
      border: 1px solid #527bf9;
      border-radius: 10px;
      -webkit-box-shadow: 0px 6px 20px 1px rgba(82,123,249,0.26);
      -moz-box-shadow: 0px 6px 20px 1px rgba(82,123,249,0.26);
      box-shadow: 0px 6px 20px 1px rgba(82,123,249,0.26);
  
      .card-container {
        border-radius: 7.5px;
        background: #fff;
        background: linear-gradient(to left bottom, #527bf9 20%, #fff 0%);    
        background-position: top right;
        background-size: 150px 150px;
        background-repeat: no-repeat;
        ${media.phone`
        background-size: 100px 100px;
        `}
      }

      .anticon {
        position: absolute;
        right: 5px;
        top: 5px;
        color: #fff;
        font-size: 22px;
        ${media.phone`
        font-size: 12px;
        `}
      }       
    }    
    &.add {
      height: 267px;
      border: 1px solid #DBDEE7;
      border-radius: 10px;
      padding: 100px 55px;
      background: #F5F6FA;
      text-align: center;
      color: #95A5C0;
      font-weight: bold;
      ${media.laptopSm`
        padding: 80px 20px;
        h1 {
          font-size: 15px;
        }
      `}
      i {
        font-size: 25px;
      }
      h1 {
        color: #95A5C0;
        font-size: 18px;
        line-height: 22px;
        font-weight: bold;
        margin-top: 10px;
      }
    }    
    .card-container {
      padding: 20px 30px 0px 30px;
      height: 170px;
      cursor: pointer; 
        
      .logo {
        background-repeat: no-repeat;
        width: 50px;
        height: 48px;
        margin-bottom: 25px;
        ${media.phoneSm`
        margin-bottom: 10px;
        width: 40px;
        `}    
        ${media.phoneXs`
        margin-bottom: 10px;
        `}
        &.visa {
          background-image: url(${Visa});
        }
        &.mastercard {
          background-image: url(${Mastercard});
        }
        &.amex {
          background-image: url(${Amex});
        }
        &.dinersclub {
          background-image: url(${DinnersClub});
        }
        &.discover {
          background-image: url(${Discover});
        }
      }
      .provider {
        letter-spacing: 1px;
        font-size: 18px
      }
      // .provider {
      //   display: block;
      //   font-size: 18px;      
      //   font-weight: bold;
      //   text-transform: capitalize;
      //   padding: 10px 0 0;
      //   color: #3b475b;
      //   overflow: hidden;
      //   white-space: nowrap;
      //   text-overflow: ellipsis;
      // }
      // .ccvalue {
      //   color: #b3b3b3;
      //   font-weight: normal;
      //   font-size: 16px;
      // }      
      h2 {
        color: #454f5b;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
        margin: 0 0 30px;
        width: calc(100% - 20px);
      }
      p {
        color: #a5aeb7;
        font-family: Lato;
        font-size: 18px;
        line-height: 22px;
        margin: 0;
      }
      img {
        height: 48px;      
        width: 50px;
        display: inline-block;
        vertical-align: top;
        /* padding-top: 10px; */
        margin: 10px 0 0 auto;
      }
      .expiry {
        width: calc(100% - 40px);
        display: inline-block;
      }
    }
    .product {
      padding: 20px 30px 20px 30px;
      border-top: 1px solid rgba(151, 151, 151, 0.25);
      .branches {
        /* padding: 0 0 40px; */
        a {
          padding: 0 5px 0 0;
          &:not(:last-child):after {
            content: ",";
          }
        }
        span {
          display: block;
          font-size: 14px;
          ${media.laptop`
          font-size: 14px;
          `}      
          ${media.laptopXl`
          font-size: 14px;
          `}  
          ${media.phone`
          display: inline-block;
          font-size: 12px;
          `}
          ${media.phoneSm`
          display: inline-block;
          font-size: 12px;
          `}      
          font-weight: bold;
        }
        img {
          display: inline-block;
          margin: 15px 10px 0 0;
          ${media.xlgDesktop`
          height: 18px; 
          `}
          ${media.lgDesktop`
          height: 18px; 
          `}
          ${media.laptop`
          height: 16px; 
          `}      
          ${media.laptopXl`
          height: 15px; 
          `}
          ${media.laptopSm`
          height: 20px;
          `}
          ${media.phone`
          margin: 0px 10px 0 10px;
          height: 12px;
          `}
          ${media.phoneSm`
          margin: 0px 10px 0 10px;
          height: 10px;
          `}      
        }  
      }      
    }
    p {
      color: #a5aeb7;
      font-family: Lato;
      font-size: 18px;
      line-height: 22px;
      margin: 0;
    }
    img {
      width: 40px;
      display: inline-block;
      vertical-align: top;
      /* padding-top: 10px; */
      margin: 10px 0 0 auto;
    }
    .expiry {
      width: calc(100% - 40px);
      display: inline-block;
    }
  }
  .selector {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 30px;
    top: 30px;
    border-radius: 50%;
    border: 1px solid #454f5b;
    &.selected {
      border: 1px solid #6590fa;
      &:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: #6590fa;
        border-radius: 50%;
        top: 4px;
        right: 4px;
      }
    }
  }
  .hidden {
    display: none;
  }
  .ant-input-number {
    width: 90%;
    border-radius: 0;
    input {
      border: none;
    }
    ${media.laptopSm`
      width: 100%;
    `}
  }
`;

export const ReviewOrderWrapper = styled.div`
  position: relative;
  max-width: 960px;
  margin: 50px auto;
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  ${media.laptopSm`
    position: static;
    margin: 0;
  `}
  i {
    &.anticon-left {
      top: 1px;
      position: relative;
    }
  }
  > .error,
    .success{
    text-align: center;
    margin-top: 120px;
    ${media.laptopSm`
      text-align: center;
      padding: 0 20px;
      margin-top: 50%;
      transform: translateY(-50%);
    `}
    h2{
      font-size: 30px;
      font-weight: bold;
      margin: 20px 0 10px;
      ${media.phone`
        font-size: 18px;
        line-height: 22px;
      `}
    }
    p{
      font-size: 18px;
      ${media.phone`
        font-size: 14px;
      `}
      color: #A5AEB7;
    }
    .ant-btn{
      margin: 40px auto;
      text-align: center;
      ${media.phone`
        margin: 20px 0 0;
      `}
    }
  }
  button {
    display: block;
    width: 293px;
    margin: 40px 0 0 auto;
    top: 0;
    text-align: left;
    font-weight: 400;
    letter-spacing: 1px;
    ${media.laptopSm`
      width: 100%;
    `}
  }
  .default {
    padding: 60px 0 0;
    ${media.laptopSm`
      padding: 15px;
    `}
    ${media.phone`
      padding: 0;
    `}
    .back.-mobile{
      display: none;
      ${media.phone`
        display: block;
        left: 20px;
      `}
    }
    .styled-div_cart-item_form-header {
      max-width: 950px;
      margin: 0 auto 40px;
      &._review-order_override {
        margin: 61px auto 40px;
        ${media.phone`
          display: none;
        `}
        > .back{
          ${media.phone`
            display: none;
          `}
        }
        h2 {
          margin: 0;
          font-family: Lato;
          line-height: 40px;
          span {
            color: ${color.network};
          }
          ${media.tablet`
              margin-top: 20px;
          `}
        }
        button {
          transition: 0.15s all;
          display: block;
          font-family: Lato;
          width: 220px;
          text-align: left;
          padding-top: 10px;
          line-height: 50px;
          margin: 0 !important;
          letter-spacing: 1px;
          &:hover {
            transition: 0.15s all;
            cursor: pointer;
            opacity: 0.8;
          }
          ${media.tablet`
              line-height: 1.7;
          `}
          i {
            &.anticon-left {
              top: 1px;
              position: relative;
            }
          }
        }
      }
    }
    .user-details {
      padding: 20px 0 40px;
      border-radius: 5px;
      margin: 0 0 20px;
      ${media.phone`
        padding: 20px;
        margin: 0;
        border-bottom: 1px solid rgba(151,151,151,0.25);
      `}
      .styled-div_review-order_details-wrapper{
        &:last-child{
          margin-top: 40px;
        }
        &.billing-details{
          span{
            ${media.phone`
              line-height: normal;
              margin-bottom: 10px;
            `}
            label{
              ${media.phone`
                font-size: 13px;
                display: block;
              `}
            }
          }
        }
      }
    }

    .summary {
    padding: 40px 35px;
    border: 2px solid rgba(151, 151, 151, 0.25);
    border-radius: 5px;
    box-shadow: 0 2px 19px 0 rgba(26, 135, 183, 0);

    #paypal-button-container {
      text-align: center;
      margin-top: 30px;
    }

    .place-order-btn {
      position: relative;
      margin: 30px auto 0 !important;
      text-align: center;
    }

    h2 {
      color: #6590fa;
      font-size: 20px;
      font-weight: bold;
      line-height: 24px;
      margin-bottom: 20px;
    }
    .product {
      position: relative;
      span {
        color: #454f5b;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
        display: inline-block;
        width: 60%;
        ${media.laptopSm`
          font-size: 18px;
        `}
        &.price {
          width: 40%;
          text-align: right;
          vertical-align: top;
        }

        &.line-through {
          font-style: italic;
          text-decoration: line-through;
          color: #c6c7c8;
          font-weight: normal;
        }
        &.has-discount {
          width: 100%;
          text-align: right;
          position: absolute;
          top: 21px;
          right: 0;
        }
      }
    }
    .add-ons {
      padding: 60px 0 0;
      .details {
        display: block;
        margin: 0;
        span {
          color: #a5aeb7;
          display: inline-block;
          font-size: 18px;
          line-height: 22px;
          margin: 5px 0;
          width: 60%;
          text-align: left;
        }
        h3 {
          color: #454f5b;
          font-size: 18px;
          font-weight: bold;
          display: inline-block;
          width: 35%;
          text-align: right;
          padding-right: 10px;
          &.has-discount {
            width: 17%;
          }
          &.line-through {
            font-style: italic;
            text-decoration: line-through;
            color: #c6c7c8;
            font-weight: normal;
          }
        }
        i {
          color: #6590fa;
          font-size: 18px;
          width: 5%;
          text-align: right;
          cursor: pointer;
        }
      }
      h1 {
        color: #6590fa;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
        width: 65%;
        padding-bottom: 20px;
      }
    }
    .discount {
      border: 1px solid rgba(151, 151, 151, 0.25);
      border-width: 1px 0;
      padding: 40px 0;
      margin: 40px 0;
      ${media.laptopSm`
        margin: 20px 0;
        padding: 20px 0;
      `}
      > span {
        font-size: 12px;
        padding: 5px 0;
        float: left;
        color: #ff0000;
      }
      a {
        padding: 5px 15px 5px 0;
        float: left;
        font-size: 15px;
      }
      input {
        height: 45px;
        margin: 5px 0;
        &.error {
          border-color: #ff0000;
          text-align: left;
        }
      }
      button {
        height: 45px;
        width: 100%;
        margin: 5px 0 !important;
        text-align: center;
        &[disabled] {
          border-color: #dddddd;
          color: #dddddd;
        }
      }
    }
    .total {
      .sub {
        padding: 10px 0;
        span {
          color: #959faa;
          font-size: 18px;
          font-weight: bold;
          line-height: 22px;
          display: inline-block;
          text-align: right;
          &:first-child {
            width: 60%;
          }
          &:last-child {
            width: 40%;
          }
        }
      }
      .final {
        padding: 15px 0 0;
        span {
          display: inline-block;
          width: 60%;
          text-align: right;
          color: #6592fa;
          font-size: 18px;
          font-weight: bold;
          line-height: 22px;
        }
        h2 {
          display: inline-block;
          width: 40%;
          color: #454f5b;
          font-size: 28px;
          font-weight: bold;
          line-height: 34px;
          text-align: right;
        }
      }
    }
  }
  .error,
  .success {
    text-align: center;
    padding: 50px 20px;
    .error-message {
      color: #ff0000;
    }

    h2 {
      color: #454f5b;
      font-size: 30px;
      font-weight: bold;
      line-height: 36px;
      margin: 10px 0;
    }
    p {
      color: #bec5cb;
      font-size: 18px;
      line-height: 22px;
    }
    button {
      margin: 20px auto !important;
      width: 220px;
      text-align: center;
    }
  }

  /*  Personal Details */
  div {
    &.styled-div_review-order_details-wrapper {
      margin: 0 0 50px;
      letter-spacing: 1px;
      position: relative;
      ${media.phone`
        margin: 0 0 20px;
      `}
      &:last-child {
        margin: 0;
        padding: 0;
      }
      h2 {
        color: #454f5b;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
        margin-bottom: 15px;
        ${media.laptopSm`
          font-size: 18px;
        `}
      }
      .details{
        color: #A5AEB7;
        font-size: 18px;
        font-weight: bold;
        > span{
          display: block;
          margin-bottom: 5px;
          label{
            color: #454f5b;
          }
        }
      }
      div {
        &.styled-div_review-order_details-wrapper_inner {
          h1 {
            color: #A5AEB7;
            font-size: 18px;
            letter-spacing: 0.5px;
            font-weight: 400;
            display: inline-block;
            ${media.laptopSm`
              font-size: 16px;
            `}
          }
          h3 {
            color: ${color.landingblue};
            font-size: 25px;
            font-weight: bold;
            line-height: 35px;
            display: block;
            margin-top: 5px;
            ${media.laptopSm`
              font-size: 18px;
            `}
            ${media.phone`
              text-align: center;
            `}
          }
          h6 {
            color: #444f5b;
            font-size: 20px;
            letter-spacing: 0.5px;
            font-weight: bold;
            display: inline-block;
            ${media.laptopSm`
              font-size: 16px;
            `}
          }
          ._align {
            &._align-left {
              text-align: left;
            }
            &._align-right {
              text-align: right;
            }
            position: relative;

            h5 {
              color: #444f5b;
              font-size: 18px;
              letter-spacing: 0.5px;
              font-weight: bold;
              display: inline-block;
              text-align: right;
              ${media.laptopSm`
                font-size: 16px;
              `}
            }
            .anticon-close {
              position: absolute;
              color: #A5AEB7;
              ${position.centerX}
              left: 20%;
              font-weight: bold;
              top: 4px;
              font-size: 16px;
            }
          }
          span {
            color: #A5AEB7;
            font-size: 18px;
            line-height: 35px;
            display: block;
            font-weight: bold;
            label {
              color: #444f5b;
              margin-right: 5px;
            }
            ${media.laptopSm`
              font-size: 16px;
            `}
          }
          ._grand-total {
            margin-top: 40px;
            max-width: 250px;
            margin-left: auto;
            ${media.phone`
              max-width: 100%;
            `}
            h6{
              color: #959FAA;
              font-size: 18px;
              margin-bottom: 5px;
            }
            h5 {
              color: #959FAA;
              font-size: 18px;
            }
            ._align-left {
              ${media.laptopMmd`
                text-align: right;
              `}
            }
            .gtotal{
              h6 {
                color: ${color.landingblue};
                margin: 5px 0 0;
              }
              h5{
                color: #444f5b;
                font-size: 25px;
              }
            }
          }
        }
        &._order-summary{
          border-bottom: 1px solid rgba(151,151,151,0.25);
          padding-bottom: 40px;
          margin-bottom: 40px;
          ${media.phone`
            padding: 0 20px 0px;
            border: 0;
            margin-bottom: 0;
          `}
          > h3{
            ${media.phone`
              margin-top: 20px;
            `}
          }
        }
      }
      a {
        color: ${color.landingblue};
        font-size: 18px;
        font-weight: bold;
        line-height: 35px;
        display: block;
        margin-top: 5px;
        ${media.laptopSm`
          font-size: 16px;
        `}
        &.edit{
          ${media.phone`
            position: absolute;
            top: 0;
            right: 0;
            margin: 0;
            line-height: 24px;
          `}
        }
      }
      .styled-button_review-order_place-order {
        border: 4px solid ${color.landingblue};
        position: relative;
        text-align: center;
        > span{
          display: inline-block;
          > span{
            color: ${color.landingblue};
            display: block;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 3px;
            & + span{
              font-size: 10px;
              font-weight: normal;
              color: #A5AEB7;
              margin: 0;
            }
          }
        }
        i {
          color: ${color.white};
          font-size: 30px;
          vertical-align: top;
          margin-right: 10px;
          font-size: 25px;
          &.anticon-file-text{
            font-size: 29px;
            margin-right: 0;
          }
        }
        &.bordered{
          i{
            color: ${color.landingblue};
          }
        }
      }
      .styled-div_review-order_details-wrapper_billing-to {
        margin: 35px 0 5px;
        span {
          color: #A5AEB7;
          font-size: 18px;
          font-weight: bold;
          line-height: 35px;
          display: block;
          label {
            color: #444f5b;
            margin-right: 5px;
          }
          ${media.laptopSm`
            font-size: 16px;
          `}
        }
      }
      .discount{
        padding: 0 30px 30px;
        ${media.phone`
          border-bottom: 1px solid rgba(151,151,151,0.25);
          border-top: 1px solid rgba(151,151,151,0.25);
          padding: 30px;
          margin-top: 30px;
        `}
        .ant-input{
          height: auto;
          padding: 8px 10px;
          ${media.phone`
            font-size: 14px;
            padding: 6px 10px;
          `}
        }
        .ant-btn{
          margin: 0;
          display: block;
          width: 100%;
          text-align: center;
          height: auto;
          padding: 13px 0;
          font-size: 16px;
          border: 0;
          color: ${color.white};
          background: ${color.landingblue};
          line-height: normal;
          ${media.phone`
            padding: 7px 0;
            line-height: 21px;
          `}
        }
      }
      .order-summary-btns{
        text-align: right;
        ${media.phone`
          padding: 30px;
        `}
        .ant-btn{
          width: auto;
          display: inline-block;
          vertical-align: top;
          padding: 0 30px;
          letter-spacing: normal;
          text-align: left;
          padding: 0 20px;
          ${media.phone`
            margin: 0;
            width: 100%;
            text-align: center;
          `}
          > span{
            ${media.phone`
              text-align: left;
            `}
          }
          &.ant-btn-primary{
            margin-left: 30px;
            padding: 0 30px;
            ${media.phone`
              width: 100%;
              margin: 10px 0;
              text-align: center;
            `}
          }
        }
      }
      .styled-div_review-order_details-content{
        border: 2px solid rgba(151,151,151,0.25);
        box-shadow: 0 2px 19px 0 rgba(26,135,183,0);
        border-radius: 5px;
        padding: 40px;
        ${media.phone`
          border: 0;
          padding: 0;
        `}
      }
      .partial-payment-wrapper{
        ${media.phone`
          padding-bottom: 40px;
        `}
        .ant-form-item-control-wrapper{
          background: #FAFAFA;
          padding: 30px 40px 25px;
          ${media.phone`
            padding: 20px;
          `}
          .ant-checkbox-wrapper{
            font-size: 21px;
            font-family: ${fontFamily.fontSecondary};
            font-weight: bold;
            ${media.phone`
              font-size: 18px;
            `}
          }
          .ant-checkbox{
            margin-right: 10px;
            input[type="checkbox"]{
              width: 25px;
              height: 25px;
            }
            .ant-checkbox-inner{
              width: 25px;
              height: 25px;
              &:after{
                left: 8px;
                width: 8px;
                height: 15px;
              }
            }
          }
        }
        .paying-full-amt{
          font-size: 14px;
          color: ${color.network};
          margin-top: 0;
          background: #FAFAFA;
          padding: 0 0 30px 82px;
          letter-spacing: 0;
          ${media.phone`
            text-align: center;
            padding: 0 0 30px 0;
          `}
          label{
            font-size: 25px;
            font-weight: bold;
          }
          i{
            margin-right: 10px;
          }
        }
        .action{
          ${media.phone`
            padding: 0 20px;
          `}
        }
        button{
          margin: 20px 0 0 auto;
          line-height: normal;
          width: auto;
          padding: 0 30px;
          ${media.phone`
            margin: 20px 0 0;
            width: 100%;
          `}
        }
        .ant-form-item{
          margin: 0 !important;
        }
        .partial-payment-input{
          background: #FAFAFA;
          padding: 0 0 30px 82px;
          ${media.phone`
            padding: 10px 40px 20px;
            text-align: center;
          `}
          .ant-form-item-label{
            display: inline-block;
            vertical-align: middle;
            margin-bottom: 5px;
            ${media.phone`
              text-align: center;
              margin: 0;
            `}
          }
          .ant-form-item-control-wrapper{
            display: inline-block;
            max-width: 150px;
            padding: 0;
            vertical-align: middle;
          }
          .ant-form-item-label{
            label{
              font-size: 25px;
              margin-right: 20px;
              ${media.phone`
                font-size: 21px;
                margin-right: 0;
              `}
            }
          }
          .ant-input-number{
            width: 100%;
          }
          .ant-input-number-input-wrap{
            .ant-input-number-input{
              background: ${color.white};
              padding: 0 0 0 20px;
              height: auto;
            }
          }
        }
      }
    }
  }
`;
