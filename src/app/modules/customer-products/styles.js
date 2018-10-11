import styled from "styled-components";
import {Col, Modal} from "antd";
import {AppWrapper} from "@ant-components";
import {media, fontFamily, color} from "@common/styles/helpers-styles";

import Mastercard from "@resources/images/icons/cc/mastercard.svg";
import Visa from "@resources/images/icons/cc/visa.svg";
import Amex from "@resources/images/icons/cc/amex.svg";
import DinersClub from "@resources/images/icons/cc/dinersclub.svg";
import Discover from "@resources/images/icons/cc/discover.svg";


import CourseLogoBackground from "@resources/images/course_background.png";

export const ProductsPageWrapper = styled.div`
  font-family: ${fontFamily.fontProx};
  ${media.tablet`
    padding: 0 16px;
  `}
  h1 {
    padding: 10px 0 0;
  }
  .ant-tabs{
    font-family: ${fontFamily.fontProx};
  }
`;

export const ProductCard = styled(AppWrapper)`
  border-radius: 15px;
  margin: 0 0 30px;
  padding: 0;
  min-height: 655px;
  overflow: hidden;
  .product-image {
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .content {
    padding: 20px 30px;
    text-align: center;
  }
  .footer{
    color: #95A5C0;
    border-top: 1px solid #D0D2DF;
    font-size: 16px;
    margin-top: 30px;
    padding: 20px 25px;
    ${media.phone`
      border-top: 2px solid #D0D2DF;
      font-size: 14px;
    `}
  }
  h3 {
    color: #9babc4;
    font-size: 18px;
    display: block;
    border-top: 1px solid #e5e9f2;
    padding: 25px;
    text-align: center;
  }
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: block;
    margin: auto;
  }
  h1 {
    color: #3b475b;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    margin: 30px 0;
    ${media.phone`
      font-size: 16px;
      margin: 0 0 10px;
    `}
  }
  h2 {
    color: #9babc4;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    span {
      &.enabled {
        color: #41c084;
      }
      &.disabled {
        color: #e1e1e1;
      }
    }
  }
  p {
    color: #9babc4;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    ${media.phone`
      font-size: 14px;
      lne-height: 17px;
    `}
  }
  div {
    display: block;
    .ant-btn {
      background: ${color.landingblue};
      border: 0;
      font-size: 18px;
      width: 171px;
      display: block;
      font-weight: bold;
      border-radius: 10px;
      margin: 35px auto !important;
      padding: 11px 0;
      height: auto;
      box-shadow: 0 9px 19px 0 rgba(101,146,250,0.37);
      ${media.phone`
        font-size: 16px;
        padding: 9px 0;
      `}
    }
  }
`;

export const QuickLinksCard = styled(AppWrapper)`
  padding: 0;
  margin-top: 20px;
  ${media.tablet`
    display: none;
  `}
  h1 {
    color: #3b475b;
    font-size: 23px;
    font-weight: 600;
    text-align: center;
    padding: 45px 0 35px;
    margin: 0;
    border-bottom: 1px solid #e5e9f2;
  }
  ul {
    padding: 44px 55px;
    margin: 0;
    list-style: none;
    ${media.laptop`
      padding: 30px;
    `}
    ${media.phone`
    padding: 20px;
    `}
    li {
      color: #9babc4;
      cursor: pointer;
      font-size: 18px;
      margin-bottom: 30px;
      ${media.laptopMmd`
        margin-bottom: 10px;
      `}
      i {
        font-size: 21px;
        width: 52px;
        height: 52px;
        background: #f1f4fc;
        border-radius: 50%;
        line-height: 52px;
        margin: 0 20px 0 0;
        color: #6e98fa;
        ${media.laptopMmd`
          display: none;
        `}
      }
      &:hover{
        color: #3b475b;
      }
    }
  }
`;

export const SubscriptionCardWrapper = styled(AppWrapper)`
  padding: 0;
  overflow: hidden;
  margin-top: 20px;
  font-family: ${fontFamily.fontProx};
  .product-side-menu-toggle{
    display: none;
    width: 45px;
    height: 45px;
    background: #6592FA;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    position: absolute;
    bottom: -22px;
    right: 20px;
    z-index: 1;
    box-shadow: 0 4px 7px 0 rgba(101,146,250,0.37);
    ${media.tablet`
      display: block;
    `}
    i{
      vertical-align: middle;
    }
  }
  ${media.laptopSm`
    .logo-wrapper {
      height: auto;
    }
    button {
      bottom: 0;
      margin: 0;
      position: relative!important;
    }
    .details {
      h2, h3 {
        font-size: 16px!important;
      }
      .status {
        .ant-badge, .renewal {
          width: 100%!important;
          display: block!important;
          text-align: center;
        }
      }
    }
  `}
  ${media.tablet`
    border-radius: 0;
    margin-top: 0;
  `}

  .product-side-menu-toggle{
    display: none;
    width: 45px;
    height: 45px;
    background: #6592FA;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    position: absolute;
    bottom: -22px;
    right: 20px;
    z-index: 1;
    box-shadow: 0 4px 7px 0 rgba(101,146,250,0.37);
    ${media.tablet`
      display: block;
    `}
    i{
      vertical-align: middle;
    }
  }
  .logo-wrapper {
    position: relative;
    background: linear-gradient(247deg, #eb5e89 0%, #fa9163 100%);
    height: 100%;
    ${media.laptopSm`
      height: 360px;
    `}
    ${media.phone`
      height: 145px;
    `}
    .link-back{
      background: ${color.white};
      display: none;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      margin: 0;
      position: absolute;
      bottom: -22px;
      left: 20px;
      z-index: 1;
      box-shadow: 0 4px 7px 0 rgba(189,189,189,0.37);
      ${media.tablet`
        display: block;
      `}
    }
  }
  .status {
    display: inline-block;
    width: 50%;
    vertical-align: top;
    padding: 0 10px;
    ${media.tabletSm`
    display: block;
    width: 100%;
    padding: 0;
    `};
  }
  .details {
    padding: 40px;
    ${media.laptopMd`
      padding: 25px;
    `};
    ${media.tablet`
      text-align: center;
      padding: 55px 25px;
    `}
    .membership {
      color: #95A5C0;
      font-size: 16px;
      .info{
        margin-top: 30px;
        ${media.tablet`
          border-top: 1px solid #E3E4EC;
          padding-top: 30px;
        `}
        p{
          margin-bottom: 15px;
        }
      }
      .membership-date{
        color: #95A5C0;
        font-size: 18px;
        font-weight: bold;
        ${media.tablet`
          font-size: 14px;
          margin: 10px 0;
        `}
        span{
          color: #39475D;
          margin-left: 5px;
          ${media.tablet`
            display: block;
          `}
        }
      }
      ul{
        list-style: none;
        margin-left: 0;
        ${media.tablet`
          margin-top: 30px;
          i{display:none;}
        `}
      }
    }
    .ant-badge {
      vertical-align: top;
      width: 50%;
      ${media.laptop`
        display: block;
        width: 100%;
      `}
      .ant-badge-status-dot {
        background-color: #52c41a;
        width: 15px;
        height: 15px;
        top: -2px;
        display: none;
      }
      .ant-badge-status-success {
        background-color: #52c41a;
      }
      .ant-badge-status-cancelled {
        background-color: #9babc3;
      }
      .ant-badge-status-text {
        color: #49C354;
        font-size: 16px;
        font-weight: bold;
        margin-left: 0;
        ${media.tabletSm`
          font-size: 15px;
        `};
      }
    }
    .renewal {
      display: inline-block;
      width: 50%;
      vertical-align: top;
      margin: 11px 0;
      ${media.laptop`
        display: block;
        width: 100%;
      `}
      button {
        background: ${color.landingblue};
        border: 0;
        border-radius: 10px;
        box-shadow: 0 9px 19px 0 rgba(101,146,250,0.37);
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        margin: 0;
        padding: 10px 25px;
        margin-top: 50px;
        height: auto;
        ${media.laptopMd`
          bottom: 20px;
        `}
      }
    }
    h1 {
      color: #3b475b;
      font-size: 27px;
      font-weight: bold;
      margin-bottom: 20px;
      ${media.tablet`
        margin-bottom: 0;
      `}
      ${media.phone`
        font-size: 18px;
      `}
    }
    h2 {
      color: #3b475b;
      font-size: 18px;
      font-weight: 600;
      ${media.laptop`
        font-size: 17px;
      `};
    }
    h3 {
      color: #9babc4;
      font-size: 18px;
      font-weight: 600;
      ${media.laptop`
        font-size: 17px;
      `};
    }
  }
`;

export const CourseCard = styled(AppWrapper)`
  padding: 45px;
  margin-top: 20px;
  ${media.tablet`
    margin: 0;
    padding: 0;
  `}
  .logo {
    position: relative;
    .link-back{
      background: ${color.white};
      display: none;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      margin: 0;
      position: absolute;
      bottom: -22px;
      left: 20px;
      z-index: 1;
      box-shadow: 0 4px 7px 0 rgba(189,189,189,0.37);
      ${media.tablet`
        display: block;
      `}
    }
    .logo-bg {
      background: url(${CourseLogoBackground});
      height: 265px;
      width: auto;
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom: 20px;
    }
    img {
      width: 100%;
      max-width: 332px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      margin: auto;
      display: block;
    }
  }
  .details {
    ${media.tablet`
      padding: 55px 25px;
    `}
    ${media.phone`
      padding: 25px 25px 55px;
      text-align: left;
    `}
    h1 {
      color: #3b475b;
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 20px;
      ${media.laptopSm`
        text-align: center;
        font-size: 25px;
      `};
      ${media.phone`
        font-size: 20px;
        text-align: left;
      `}
    }
    p {
      color: #94a5c0;
      font-size: 16px;
      text-align: justify;
      &:last-child {
        margin: 0;
      }
      ${media.phone`
        text-align: left;
      `}
    }
    ul {
      padding: 0;
      margin: 0;
      margin-bottom: 40px;
      list-style: none;
      color: #94a5c0;
      font-size: 16px;
    }
    span {
      color: #6590fa;
      display: block;
      font-size: 16px;
      margin-top: 30px;
      > span{
        color: #94a5c0;
        display: inline;
      }
    }
  }
`;

export const CustomerProductDetailsWrapper = styled.div`
  position: relative;
  min-height: 500px;
  .link-back {
    margin: 20px 0 0;
    display: block;
    ${media.tablet`
      display: none;
    `}
  }
`;

export const CardCol = styled(Col)`
  padding: 10px !important;
  .rccs,
  .rccs__card,
  .add-new {
    width: 100%;
    max-width: 300px;
  }
  .add-new {
    min-height: 260px;
    max-width: 416px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background: #fbfbfb;
    font-size: 20px;
    text-align: center;
    cursor: default;
    display: block;
    margin: 10px auto;
    font-size: 20px;
    padding-top: 120px;
    color: #b3b3b3;
    i {
      display: block;
      font-size: 29px;
    }
  }
`;

export const AddPaymentMethodWrapper = styled.div`
  .rccs,
  .rccs__card {
    width: 100%;
    min-height: 300px;
  }
  button {
    height: 65px;
    padding: 0 30px;
    font-size: 17px;
    margin: 20px 0 0 auto !important;
    display: block;
  }
  .rccs__card {
    margin-top: 30px;
    box-shadow: 0 10px 32px 0 rgba(103, 195, 187, 0.63);
    border-radius: 15px;
    .rccs__card--front,
    &:not(.rccs__card--unknown) .rccs__card__background {
      background: linear-gradient(to left, #2ca7e7 0%, #64c9c0 100%);
    }
    .rccs__chip {
      display: none;
    }
    .rccs__issuer {
      position: absolute;
      left: 0;
      background-size: 50%;
      background-position: center;
    }
  }
`;

export const CreditCard = styled.div`
  background: ${color.white};
  min-height: 260px;
  max-width: 416px;
  border: 1px solid #e5e5e5;
  margin: 10px auto;
  ${media.tabletSm`
    min-height: 240px;
  `} b,
  img {
    display: block;
  }
  img {
    width: 70px;
    height: 48px;
  }
  span {
    color: #3b475b;
    font-size: 15px;
  }
  .logo {
    width: 70px;
    height: 48px;
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
      background-image: url(${DinersClub});
    }
    &.discover {
      background-image: url(${Discover});
    }
  }
  .actions {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #95a5c0;
    font-size: 17px;
    .edit-card {
      color: #95a5c0;
    }
    span {
      color: #6590fa;
      font-size: 10px;
      cursor: pointer;
      background: red;
    }
    i {
      padding: 0;
      display: block;
      text-align: right;
    }
  }
  .provider {
    display: block;
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    padding: 10px 0 0;
    color: #3b475b;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ant-row {
    padding: 20px;
    min-height: 100px;
    &:not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }
  }
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
      font-weight: bold;
    }
    img {
      display: inline-block;
      margin: 15px 10px 0 0;
      height: 20px;
    }
  }
  .error {
    position: absolute;
    top: 32px;
    left: 110px;
    font-weight: 600;
    i,
    span {
      font-size: 11px;
      color: #eb415d;
    }
    span {
      display: inline;
      padding: 0 5px;
    }
  }
  ${media.tabletSm`
    .provider {
      font-size: 15px;
    }
    span {
      font-size: 14px;
    }
    .logo {
      width: 50px;
      background-repeat: no-repeat;
      height: 40px;
    }
  `};
`;
export const EventTicket = styled(AppWrapper)`
  background: transparent;
  padding: 0;
  margin-top: 20px;
  font-family: ${fontFamily.fontProx};
  ${media.laptopSm`
    height: auto;
  `}
  ${media.tablet`
    margin-top: 0;
  `}
  .event-ticket-wrapper{
    background: ${color.white};
    border-radius: 10px;
    height: 475px;
    overflow: hidden;
    position: relative;
    ${media.laptopSm`
      height: auto;
    `}
    ${media.tablet`
      border-radius: 0;
    `}
    &:before,
    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 70px;
      height: 70px;
      right: 100%;
      top: calc(50% - 35px);
      margin-right: -35px;
      background: #f0f2f5;
      border-radius: 50%;
      box-shadow: inset 0 2px 4px rgba(41, 54, 61, 0.25);
      ${media.laptopSm`
        display: none;
      `}
    }
    &:after {
      margin-left: -35px;
      left: 100%;
      right: 0;
      box-shadow: none;
      ${media.phone`
        margin-left: -20px;
      `}
    }
  }
  img {
    height: 400px;
    width: 100%;
    margin-top: 0px;
  }
  h1 {
    font-size: 30px;
    margin-bottom: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  h2 {
    color: #3b475b;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    padding: 0 0 0 30px;
    ${media.laptop`
      padding: 0 0 0 30px;
    `};
  }
  p {
    color: #94a5c0;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 15px;
    padding: 0 0 0 30px;
    ${media.laptop`
      padding: 0 0 0 30px;
    `};
    &.desc{
      margin-top: 40px;
    }
  }
  .ticket-logo {
    height: 475px;
    top: 0;
    position: relative;
    background-size: cover;
    background-position: center;
    ${media.laptopSm`
      height: 415px;
      background-position: left bottom;
    `};
    ${media.tablet`
      display: none;
    `}
  }
  .ticket-logo-mobile{
    display: none;
    height: 137px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    ${media.tablet`
      display: block;
    `}
    .link-back{
      background: ${color.white};
      display: none;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      margin: 0;
      position: absolute;
      bottom: -22px;
      left: 20px;
      z-index: 1;
      box-shadow: 0 4px 7px 0 rgba(189,189,189,0.37);
      ${media.tablet`
        display: block;
      `}
    }
    > span{
      display: block;
      width: 45px;
      height: 45px;
      background: #6592FA;
      border-radius: 50%;
      text-align: center;
      line-height: 42px;
      position: absolute;
      bottom: -22px;
      right: 20px;
      z-index: 1;
      box-shadow: 0 4px 7px 0 rgba(101,146,250,0.37);
      i{
        vertical-align: middle;
      }
    }
  }
  .heading {
    padding: 0 30px 0 60px;
    ${media.laptopMd`
      padding: 20px;
    `}
    ${media.laptopSm`
      padding: 30px 35px 30px 0;
      text-align: center;
      border-bottom: 1px dashed #dee0e5;
      margin-left: 35px;
      height: 50%;
      p {
        max-width: 100%;
        padding: 0;
      }
    `}
    img {
      height: auto;
      margin-bottom: 40px;
      margin-top: 50px;
      max-width: 356px;
      ${media.phone`
        margin-top: 0;
      `}
    }
  }
  .details {
    border-left: 1px solid #efefef;
    padding: 50px; ${media.laptopSm`
    padding: 30px 30px 30px 55px;
    border: none;
    `}
    ${media.phone`
      font-size: 12px;
      padding: 30px 10px 10px 35px;
    `}
    h3 {
      color: #3b475b;
      font-size: 18px;
      font-weight: 600;
      margin: 0;
      ${media.phone`
      font-size: 15px;
      `}
    }
    p {
      color: #94a5c0;
      font-size: 16px;
      line-height: 18px;
      margin-bottom: 15px;
      padding: 0;
      word-break: break-all;
      ${media.laptopSm`
      max-width: 100%;
      `};
      ${media.phone`
      font-size: 14px;
      `}
    }
  }
  .claimed{
    border: 3px solid #EE6565;
    color: #EE6565;
    margin-top: 10px;
    display: inline-block;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 6px 14px;
    letter-spacing: 1.2px;
    border-radius: 5px;
  }
`;

export const EventAbout = styled.div`
  padding: 50px 0 30px;
  h1 {
    color: #3b475b;
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #dee0e4;
  }
  p {
    color: #94a5c0;
    font-size: 16px;
    line-height: 22px;
    padding: 0;
  }
`;

export const AssignTickets = styled.div`
  .status{
    i {
      display:none;
    }

    &.loading{
     i.loading{
        display:inline !important;
     }
    }

    &.saved{
     i.saved{
        display:inline !important;
     }
    }
   }
`;

export const ProductSideMenu = styled.div`
  width: 300px;
  height: calc(100vh - 65px);
  top: 64px;
  background: #fff;
  z-index: 4;
  right: 0;
  position: fixed;
  transition: 300ms all;
  transform: translateX(100vw);
  overflow-y: auto;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.5),
    0 3px 41px 0 rgba(0, 0, 0, 0.1);
  &.open {
    transform: translateX(0);
  }
  .side-menu-close{
    border-bottom: 1px solid #EBEBEB;
    padding: 15px;
    text-align: right;
  }
`;

export const QuickLinksMobile = styled.div`
  padding: 30px 20px 20px;
  h3{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  ul {
    margin: 0;
    list-style: none;
    li {
      color: #9babc4;
      cursor: pointer;
      font-size: 14px;
      margin-bottom: 20px;
      i {
        font-size: 12px;
        width: 25px;
        height: 25px;
        background: #f1f4fc;
        border-radius: 50%;
        line-height: 25px;
        margin: 0 13px 0 0;
        color: #6e98fa;
      }
      &:hover{
        color: #3b475b;
      }
    }
  }
`;


export const StyledProductDetails = styled(SubscriptionCardWrapper)`
  
`;
export const StyledEventProductDetails = styled(SubscriptionCardWrapper)`
  background: transparent;
`;

export const StyledBundledProductDetails = styled(SubscriptionCardWrapper)`
  background: transparent;
`;

export const StyledChangePaymentMethod = styled(SubscriptionCardWrapper)`
  background: ${color.white};
  padding: 40px;
  border-radius: 10px;
  ${media.laptop`
    padding: 20px;
  `}
  ${media.tablet`
    border-radius: 0;
  `}
  ${media.laptopSm`
    padding: 0;
  `}
  .details{
    padding: 0;
    ${media.laptopSm`
      background: ${color.white};
      padding: 25px;
    `}
  }
  .credit-cards{
    padding-bottom: 20px;
  }
`;

export const StyledProductInvoice = styled(SubscriptionCardWrapper)`
  .details{
    ${media.laptopSm`
      background: ${color.white};
      padding: 25px;
    `}
  }
  .content-wrapper{
    background: ${color.white};
    border-radius: 15px;
    margin-top: 30px;
    ${media.laptopSm`
      border-radius: 0;
      box-shadow: 0 0 0 0;
      padding: 0;
    `}
  }
  h2{
    font-size: 27px;
    font-weight: bold;
    font-family: ${fontFamily.fontProx};
    margin: 20px 0;
  }
  .ant-table{
    .ant-table-content{
      .ant-table-thead{
        > tr > th{
          background: #F0F2FB;
          font-weight: bold;
          padding: 13px 16px;
        }
      }
      tr > td{
        border-right: 2px solid #F0F2FB;
        border-bottom: 2px solid #F0F2FB;
      }
    }
    .ant-table-body{
      td{
        color: #95A5C0;
      }
      > table{
        border: 2px solid #F0F2FB;
        border-bottom: 0;
      }
    }
  }
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
export const StyledCancelSubscription = styled(SubscriptionCardWrapper)`
  background: ${color.white};
  padding: 40px;
  border-radius: 10px;
  ${media.laptop`
    padding: 20px;
  `}
  ${media.laptopSm`
    padding: 0;
  `}
  ${media.tablet`
    border-radius: 0;
  `}
  .details{
    padding: 0;
    ${media.laptopSm`
      background: ${color.white};
      padding: 25px;
    `}
  }
  h2{
    font-size: 27px;
    font-weight: bold;
    font-family: ${fontFamily.fontProx};
    margin: 20px 0;
  }
  .ant-radio-group{
    margin: 15px 0;
    .ant-radio-wrapper{
      margin-bottom: 10px;
      ${media.laptopSm`
        display: block;
      `}
    }
    .ant-radio{
      vertical-align: middle;
      & + span{
        padding-left: 15px;
        font-size: 19px;
        line-height: 23px;
        vertical-align: middle;
        display: inline-block;
        color: #95A5C0;
      }
    }
  }
  .ant-form-item-label{
    label{
      line-height: 15px;
    }
  }
  .action{
    margin: 40px 0 0;
    text-align: right;
    ${media.tablet`
      text-align: center;
    `}
    button{
      background: ${color.network};
      border-radius: 10px;
      font-size: 18px;
      font-family: ${fontFamily.fontSecondary};
      font-weight: bold;
      height: 50px;
      max-width: 220px;
      width: 100%;
      box-shadow: 0 9px 19px 0 rgba(101,146,250,0.37);
      &:hover,
      &:focus{
        background: #40a9ff;
      }
    }
  }
  .note{
    color: #95A5C0;
    font-size: 16px;
    margin-top: 20px;
  }
`;
export const StyledModifyPlan = styled(StyledProductDetails)`
  background: ${color.white};
  padding: 40px;
  border-radius: 10px;
  ${media.laptop`
    padding: 20px;
  `}
  ${media.laptopSm`
    padding: 0;
  `}
  ${media.tablet`
    border-radius: 0;
  `}
  .details{
    padding: 0;
    ${media.laptopSm`
      background: ${color.white};
      padding: 25px;
    `}
  }
  .ant-btn-outline{
    background: ${color.white};
    border: 2px solid ${color.landingblue};
    color: ${color.landingblue};
  }
  .product-image{
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  h2{
    font-size: 27px;
    font-weight: bold;
    font-family: ${fontFamily.fontProx};
    margin: 20px 0;
  }
  .plan-box{
    border-radius: 15px;
    color: #95A5C0;
    font-size: 16px;
    position: relative;
    margin: 20px 10px;
    background: ${color.white};
    border: 2px solid #e5e5e5;
    overflow: hidden;
    ${media.laptopSm`
      border: 2px solid #D0D2DF;
    `}
    .current{
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      &:after{
        content: "";
        display: block;
        width: 70px;
        height: 70px;
        background: ${color.landingblue};
        position: absolute;
        top: -45px;
        right: 0;
        z-index: 0;
        transform: skewY(-135deg);
      }
      i{
        position: relative;
        z-index: 1;
        margin-top: 7px;
        margin-right: 7px;
      }
    }
    &.selected{
      border: 2px solid ${color.landingblue};
      .current{
        display: block;
      }
      button{
        cursor: not-allowed;
        opacity: .4;
      }
    }
    .box-content{
      padding: 30px;
      text-align: center;
      > p{
        line-height: 20px;
      }
    }
    button{
      border-radius: 10px;
      color: ${color.landingblue};
      font-size: 18px;
      font-weight: bold;
      font-family: ${fontFamily.fontProx};
      height: auto;
      margin-top: 30px;
      padding: 13px 40px;
      line-height: 22px;
    }
    h3{
      color: #39475D;
      font-size: 20px;
      font-weight: bold;
      font-family: ${fontFamily.fontProx};
      margin-bottom: 10px;
    }
    h4{
      color: ${color.landingblue};
      font-size: 30px;
      font-weight: bold;
      font-family: ${fontFamily.fontProx};
      margin-bottom: 15px;
    }
  }
  .action{
    margin-top: 30px;
    text-align: right;
    ${media.phone`
      text-align: center;
    `}
  }
  .ant-btn-primary{
    background: ${color.network};
    border-radius: 10px;
    font-size: 18px;
    font-family: ${fontFamily.fontSecondary};
    font-weight: bold;
    height: 50px;
    max-width: 196px;
    width: 100%;
    box-shadow: 0 9px 19px 0 rgba(101,146,250,0.37);
  }
`;

export const AutoRenewal = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #95A5C0;
  margin-top: 30px;
  ${media.phone`
    font-size: 16px;
  `}
  .ant-switch{
    background: #F0F0F3;
  }
  .ant-switch:before,
  .ant-switch:after{
    background: #95A5C0;
    height: 22px;
    width: 22px;
    top: -1px;
    left: -1px;
  }
  .ant-switch-checked:before,
  .ant-switch-checked:after{
    background: #43BF83;
    height: 22px;
    width: 22px;
    top: -1px;
    left: 100% !important;
  }
  > span{
    color: #B6BDCA;
    display: inline-block;
    text-align: left;
    width: 75px;
    &.checked{
      color: #43BF83;
    }
    ${media.phone`
      display: block;
      width: auto;
      text-align: center;
    `}
  }
  .switch-wrapper{
    margin-top: 5px;
  }
  &.inline{
    ${media.tablet`
      display: none;
    `}
    .switch-wrapper{
      display: inline-block;
      margin-left: 20px;
    }
  }
  &.mobile{
    font-size: 14px;
    margin-top: 0;
    display: none;
    ${media.tablet`
      display: block;
    `}
    > span{
      display: block;
      text-align: center;
      width: auto;
    }
  }
`;

export const StyledConfirm = styled(Modal)`
  font-family: ${fontFamily.fontSecondary};
  width: 515px !important;
  .ant-modal-header{
    display: none;
  }
  .ant-modal-content{
    border: 1px solid #979797;
    border-radius: 10px;
    padding: 0 0 30px;
    .ant-modal-close{
      display: none;
    }
    .ant-modal-body{
      text-align: center;
      h2{
        color: #454F5B;
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
      }
      p{
        color: #95A5C0;
        font-size: 14px;
      }
    }
  }
  .ant-modal-footer{
    border: 0;
    float: none;
    text-align: center;
    .ant-btn{
      font-size: 18px;
      font-weight: bold;
      color: #6592FA;
      border: 2px solid #6592FA;
      padding: 10px 0;
      width: 180px;
      height: auto;
      border-radius: 10px;
      &.ant-btn-primary{
        color: #fff;
        background: #6592FA;
        margin-left: 15px;
        box-shadow: 0 9px 19px 0 rgba(101,146,250,0.37);
        ${media.phone`
          margin: 15px 0 0 0;
        `}
      }
    }
  }
`;

export const ProductLogoMobile = styled.div`
  display: none;
  ${media.laptopSm`
    display: block;
  `}
  .logo-wrapper {
    position: relative;
    background: linear-gradient(247deg, #eb5e89 0%, #fa9163 100%);
    height: 360px;
    ${media.phone`
      height: 145px;
    `}
    .link-back{
      background: ${color.white};
      display: none;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      margin: 0;
      position: absolute;
      bottom: -22px;
      left: 20px;
      z-index: 1;
      box-shadow: 0 4px 7px 0 rgba(189,189,189,0.37);
      ${media.tablet`
        display: block;
      `}
    }
  }
`;
