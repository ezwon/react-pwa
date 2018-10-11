import {Col} from "antd";
import styled from "styled-components";
import { AppWrapper } from "@ant-components/";
import Mastercard from "@resources/images/icons/cc/mastercard.svg";
import Visa from "@resources/images/icons/cc/visa.svg";
import Amex from "@resources/images/icons/cc/amex.svg";
import Dinersclub from "@resources/images/icons/cc/dinersclub.svg";
import Discover from "@resources/images/icons/cc/discover.svg";
import { media, color, fontFamily } from "@common/styles/helpers-styles";

export const AppCard = styled(AppWrapper)`
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 9px 27px 0 rgba(102,145,250,0.08);
  ${media.phone`
  padding: 30px;
  `}     
  ${media.phoneSm`
  padding: 30px;
  `}  
  margin: 20px 0px;
  h1{
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .exp-note{
    position: static !important;
  }
`;

export const CardCol = styled(Col)`
  .add-new {
    border: 1px solid #DBDEE7;
    border-radius: 10px;
    background: #F5F6FA;
    color: #95A5C0;
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    display: block;
    margin: 10px auto;
    height: 244px;
    display: flex;
    justify-content: center;
    align-items: center;   
    i {
      display: block;
      font-size: 29px;
    }
    span{
      font-size: 18px;
      font-weight: bold;
      font-family: ${fontFamily.fontProx};
    }
  }     
`;

export const AddPaymentMethodWrapper = styled(AppWrapper)`
  padding: 0;
  ${media.laptopSm`
    padding: 0;
  `}   
  .form-header {
    color: #3b475b;
    font-size: 27px;
    font-weight: bold;
    ${media.phone`
    font-size: 1.2em;
    `}     
    ${media.phoneSm`
    font-size: 1.2em;
    `}
  }
  .cc-mobile {
    @media (min-width: 767px) {
      display: none;
    }   
  }
  .cc-desktop {  
    ${media.tablet`
    display: none;
    `}      
  }  
  .form-input {
    label {
      ${media.phone`
      display: none;
      `}     
    }
    input {
      ${media.phone`
      font-size: 1em;
      `}     
      ${media.phoneSm`
      font-size: 0.9em;
      `}
      ${media.phoneXs`
      font-size: 0.8em;
      `}       
    }     
  }
  .rccs,
  .rccs__card {
    margin-top: 100px;
    transform: scale(1.15);   
    ${media.desktop`
      margin-top: 90px;
      transform: scale(1);
    `}
    ${media.laptopXl`
      margin-top: 70px;
      transform: scale(.9);
    `} 
    ${media.laptopMmd`
      margin-top: 0
      transform: scale(1);
    `} 
    ${media.laptopSm`
      margin-bottom: 20px;
    `}
    ${media.phone`
      margin: 0 auto;
      transform: scale(1);
    `}
    ${media.phoneSm`
      margin: 0 auto;
    `}
    ${media.phoneXs`
      margin: 0 auto;
    `}

  }
  .rccs__card { 
    // margin-top: 30px;
    // box-shadow: 0 10px 32px 0 rgba(103, 195, 187, 0.63);
    // border-radius: 15px;
    // .rccs__card--front,
    // &:not(.rccs__card--unknown) .rccs__card__background {
    //   background: linear-gradient(to left, #2ca7e7 0%, #64c9c0 100%);
    // }    
    // .rccs__issuer {
    //   background-position: top left;
    //   left: 10%;
    // }      
    .rccs__number {
      ${media.phoneSm`
      font-size: 1.2em;
      `}  
      ${media.phoneXs`
      font-size: 1em;
      `}       
    }
    .rccs__name {
      font-size: 0.9em;
      ${media.phoneSm`
      font-size: 0.8em;
      `}      
    }
    .rccs__expiry__value {
      ${media.phoneSm`
      font-size: 12px;
      `}        
    }
    // .rccs__chip {
    //   display: none;
    // }    
  }
  .billing-address {
    padding-top: 40px;
    ${media.phone`
    padding-top: 10px;
    `} 
    h1 {
      color: #95A5C0;
      ${media.phone`
      margin-bottom: 10px;
      `}       
    }        
  }
  .card-details{
    h1 {
      ${media.laptopSm`
        font-size: 23px;
        margin-bottom: 10px;
      `}       
    }
    ${media.laptop`
    margin-bottom: 30px;
    padding-top: 10px;
    `}
    ${media.phone`
    margin-bottom: 10px;
    `} 
  }
  .action{
    .ant-form-item{
      padding-right: 164px;
      text-align: right;
      ${media.laptopMd`
        padding: 0;
        text-align: left;
      `}
    }
    .ant-btn-primary{
      display: inline-block !important;
      margin: 20px 0 0!important;
      ${media.laptopMd`
        width: 100%;
      `}
    }
  }
  button {
    height: 65px;
    padding: 0 30px;
    font-size: 17px;
    margin: 20px 0 0 auto !important;
    display: block;
    ${media.phone`
    width: 100%;
    font-size: 12px;
    `}  
    ${media.phoneSm`
    width: 100%;
    font-size: 12px;
    `}  
    &.bordered{
      background: ${color.white};
      border: 4px solid ${color.landingblue};
      color: ${color.landingblue};
      margin: 20px 0 0 20px !important;
      position: absolute;
      top: 0;
      right: 0;
      ${media.laptopMd`
        position: static;
        width: 100%;
        margin: 0 !important;
      `}
    }  
  }
`;

export const CreditCard = styled.div`
  background: ${color.white};
  overflow: hidden;
  font-size: 10px; 
  border: 1px solid #D0D2DF;
  border-radius: 10px;
  margin: 10px auto;
  &.selected {
    border: 2px solid #6592FA;
    -webkit-box-shadow: 0 11px 21px 0 rgba(101,146,250,0.22);
    -moz-box-shadow: 0 11px 21px 0 rgba(101,146,250,0.22);
    box-shadow: 0 11px 21px 0 rgba(101,146,250,0.22);
    .credit-card-section{
      height: 150px;
    }
    .product{
      height: 90px;
    }

    .current{
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      &:after{
        content: "";
        display: block;
        width: 63px;
        height: 63px;
        background: #6592fa;
        position: absolute;
        top: -45px;
        right: 0;
        z-index: 0;
        -webkit-transform: skewY(-135deg);
        -ms-transform: skewY(-135deg);
        transform: skewY(-135deg);
      }
      .anticon {
        position: absolute;
        right: 5px;
        top: 5px;
        color: #fff;
        font-size: 18px;
        z-index: 1;
      } 
    }

    
  }
  ${media.tabletSm`
  `} b,
  img {
    display: block;
    ${media.phone`
      display: inline-block;
    `}
  }
  .card-head{
    padding-right: 95px;
    margin-bottom: 30px;
    text-align: left;
  }
  img {
    width: 70px;
    height: 48px;
    ${media.phone`
    width: 50px;
    height: 29px;
    `}     
    ${media.phoneSm`
    width: 45px;
    height: 24px;
    `}   
  }
  .exp-note{
    display: inline-block;
    vertical-align: top;
    margin-top: 9px;
    font-size: 9px;
    color: #EE6565;
    ${media.lgDesktop`
      position: absolute;
      bottom: -20px;
      left: 0;
    `}
    ${media.desktopSm`
      position: static;
    `}
    ${media.laptopXl`
      position: absolute;
    `}
    ${media.laptopMmd`
      position: static;
    `}
    i{
      margin-right: 3px;
    }
  }
  .logo {
    background-repeat: no-repeat;
    width: 50px;
    height: 35px; 
    display: inline-block;
    margin-right: 13px;
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
      background-image: url(${Dinersclub});
    }
    &.discover {
      background-image: url(${Discover});
    }
  }
  .actions {
    position: absolute;
    right: 35px;
    top: 28px;
    color: #95a5c0;
    ${media.phone`
      right: 30px;    
    `}
    .edit-card {
      color: #95a5c0;
    }
    span {
      display: inline-block;
      color: #6590fa;  
      cursor: pointer;
      border: 1px solid;
      text-align: center;
      font-size: 10px;
      font-weight: bold;
      padding: 3px 0;
      width: 85px;
      border: 2px solid #6590fa;
      border-radius: 3px;
      margin: 0;
    }
    i {
      cursor: pointer;
      padding: 0;
      display: block;
      text-align: right;
      &.anticon-delete{
        font-size: 17px;
      }
    }
  }
  .credit-card-section {  
    height: 151px;   
    padding: 25px 30px;
    &:not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }
  }
  .product {
    padding: 15px 30px;
    height: 91px;
    text-align: left;
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
      font-size: 15px;      
      font-weight: bold;
    }
    img {
      display: inline-block;
      margin: 10px 10px 0 0;
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
  .provider {
    font-size: 16px;
    display: block;
    text-align: left;
    &.exp{
      text-align: right;
    }
  }
  span {
    color: #3b475b;
    font-size: 16px;
    ${media.desktopSm`
    font-size: 15px;
    `}
    ${media.laptop`
    font-size: 14px;
    `}
    ${media.laptopSm`
    font-size: 16px;
    `}    
    ${media.phone`
    font-size: 12px;
    `}    
  }
`;
