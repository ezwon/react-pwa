import styled from "styled-components";
import {color, media} from "@common/styles/helpers-styles";
import {Layout, AutoComplete, Button} from "antd";
import Mask from "@resources/images/bannermask.png";
import Menu from "@ant-components/Menu";

const {Header, Content, Footer} = Layout;

export const StyledHeader = styled(Header)`
  background: ${color.white} !important;
  height: 90px !important;
  line-height: 90px !important;
  box-shadow: 0 -2px 37px 0 rgba(0, 0, 0, 0.16) !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  ${media.laptopMmd`
    background: linear-gradient(to right, #9882f5, #6590fa) !important;
    padding: 0 20px !important;
    box-shadow: 0 -2px 37px 0 rgba(0, 0, 0, 0.30) !important;
  `} 
  .shop-top-menu {
    width: 100%;
    height: 90px;
    max-width: 1670px;
    // iStack Network - Menu Logo Text
    .styled-logo-text {
      display: inline-block;
      letter-spacing: 1px;
      color: #959FAA;	font-family: Lato;	font-size: 24px;	font-weight: bold;	line-height: 90px;
      ${media.laptopXl`
        display: none;
      `}
    }

  }
  .shop-top-menu-bar {
    height: 90px;
    float: right;
    ${media.laptopMmd`
      display: none;
    `}
  }
  .shop-top-menu-user {
    ${media.laptopMmd`
      display: none;
    `}
  }
  .shop-top-menu-mobile {
    display: none;
    float: right;
    ${media.laptopMmd`
      display: inline-block;
      /* vertical-align: middle; */
    `}
  }
  .shop-top-menu-icon {
    display: none;
    ${media.laptopMmd`
      display: inline-block;
      width: 20px;
      vertical-align: middle;
      // margin: 40px 7px 0;
      color: white;
    `}
  }
`;

export const StyledContainer = styled(Content)`
  padding: 0;
  overflow-x: scroll;
  min-height: 500px;
  max-height: calc(100vh - 138px);
  margin-top: 90px;
  
  ${media.tablet`
    margin-top: 90;
  `};
`;

export const StyledMobileRightSideMenuWrapper = styled.div`
  position: fixed;
  transition: 300ms all;
  transform: translateX(100vw);
  overflow-y: auto;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.5), 0 3px 41px 0 rgba(0, 0, 0, 0.1);
  top: 90px;
  background: ${color.white};
  width: 300px;
  height: calc(100vh - 65px);
  > div {
    width: 250px;
  }
  
  &.open {
    transform: translateX(calc(100vw - 270px));
  }
`;

export const StyledFooter = styled(Footer)`
  color: #959faa;
  font-size: 12px !important;
  position:fixed;
  bottom: 0;
  width: 100%;
  line-height: 17px;
  text-align: center;
  border-top: 1px solid #dddee0;
  padding: 15px 0 !important;
  z-index: 9;
`;

export const StyledMenuItems = styled.div`
  position: relative;

  .ant-menu-inline{
   border-right: none !important;
  }
`;

export const StyledAvatar = styled.div`
  text-align: center;
  padding: 10px 0;
  div {
    height: 80px;
    width: 80px;
    margin: auto;
  }
  .image-border {
    width: 75px;
    height: 75px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
    border-radius: 50%;
    background: linear-gradient(175deg, #9781f5 0%, #6590fa 100%);
  }
  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    padding: 0;
    z-index: 4;
    display: block;
    margin: auto;
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    border: 5px solid white;
  }
  span {
    font-size: 19px;
    color: #38455b;
    padding: 10px 0;
    display: block;
    font-weight: 500;
  }
`;

export const TopMenuLoginButton = styled(Button)`
  border-radius: 0 !important;
  padding: 5px 25px !important;
  background-color: #6590fa !important;
  color: #fff !important;
  border: 2px solid #5e8eff !important;
  font-size: 14px !important;
  height: auto !important;
`;

export const MenuBar = styled(Menu)`
  display: inline-block;
  border: 0 !important;
  .ant-menu-item-selected,
  .ant-menu-item,
  .ant-menu-item:hover {
    border-bottom: 0 !important;
  }
  .ant-menu-item.ant-menu-item-selected,
  .ant-menu-item:hover {
    color: #454f5b !important;
  }
  .ant-menu-item {
    margin: 0;
    top: 0;
    color: #454F5B !important;
    font-weight: bold;
    color: #454F5B;
    font-family: Lato;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    line-height: 90px;
    ${media.laptopXl`
      font-size: 16px;	
    `}
    ${media.laptop`
      font-size: 14px;	
    `}
  }
  .ant-menu-item {
    // line-height: 90px !important;
    // float: right !important;
  }
`;

export const SearchBar = styled(AutoComplete)`
  width: 100%;
  max-width: calc(100% - 220px);
  vertical-align: top;
  height: 50px;
  margin-top: 20px !important;
  margin-left: 40px !important;
  ${media.laptopXl`
    margin-left: 20px !important;
    max-width: calc(100% - 90px);
  `}
  ${media.laptopMmd`
    max-width: calc(100% - 0px);
    top: 90px; 
    width: 100% !important;
    position: fixed !important;
    margin: 0 !important;
    transition: 300ms all;
    left: 0;
    padding: 0 20px 10px !important;
    background: linear-gradient(to right,#9882f5,#6590fa);
    transform: scale(1, 0);
    transform-origin: top center;
    
    &.show {
      transform: scale(1, 1);
    }
  `}
  input {
    border-radius: 0 !important;
    border: 1px solid #e8e8e8;
    height: 50px !important;
    padding-left: 45px !important;
    ${media.laptopMmd`
      height: 32px !important;
    `}
  }
  .anticon-search {
    font-weight: 900;
  }
  .ant-select-selection__placeholder {
    text-align: center;
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    margin: 0 !important;
    margin-left: 45px !important;
    top: 0px;
    ${media.laptopXl`
      font-size: 12px;
    `}
    ${media.laptopMmd`
      font-size: 14px;
      top: 0;
      height: 100%;
      line-height: 32px;
    `}
  }
  .ant-input-affix-wrapper .ant-input-prefix {
    font-size: 19px;
    color: #959faa;
    ${media.laptopMmd`
      font-size: 16px;
    `}
  }
`;

export const Logo = styled.div`
  display: inline-block;
  img {
    height: 45px;
    // margin: 23px 0 22px;
    filter: invert(0.4);
  }
  .short {
    display: none;
    filter: none;
    ${media.laptopXl`
      display: inline-block;
      filter: invert(0.4);
    `}
    ${media.laptopMmd`
      display: none;
      filter: none;
    `}
  }
  .logo {
    display: none;
    ${media.laptopMmd`
      display: inline-block;
      filter: none;
    `}
    ${media.phone`
      max-width: 180px;
      height: auto;
    `}
  }
  ${media.laptopMmd`
    color: ${color.white};
  `}
`;

export const UserBar = styled.div`
  position: relative;
  display: inline-block;
  max-width: 290px;
  margin-left: 40px;
  vertical-align: top;
  cursor:pointer;

  ${media.laptopXl`
    margin-left: 20px;
  `}

  &.active {
    .arrow {
      transform: rotate(180deg);
    }
    ul {
      box-shadow: 0 3px 7px 0px #1912121c;
      transform: scale(1);
      z-index: 2;
      opacity: 1;
      cursor: default;

      li:hover {
        color: #6a94fa !important;
      }
    }

    .trigger {
      z-index: -1;
    }
  }
  .trigger {
    z-index: 1;
    padding: 0 20px;
    max-width: 300px;
    width: 100%;
    height: 100%;
    min-height: 55px;
    ${media.laptopXl`
      max-width: 280px;
    `}
    ${media.laptop`
      padding: 0 20px 0 10px;
    `}
  }
  .ant-avatar-image {
    // margin-top: 11px;
    display: inline-block;
    vertical-align: middle;
    border: 2px solid #fdfdfd;
    box-shadow: 0px 0px 10px 1px #00000024;
    width: 50px;
    height: 50px;
    ${media.laptopXl`
      width: 45px;
      height: 45px;
    `}
  }
  .ant-avatar-lg {
    border-radius: 50%;
  }
  .name {
    width: calc(100% - 70px);
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0 12px 0 20px;
    font-weight: bold;
    word-break: break-word;
    vertical-align: middle;
    max-height: 40px;
    margin-right: 20px;
    max-width: 180px;
    letter-spacing: 1px;
    font-family: "Lato";
    color: #71777E;
    font-size: 18px;
    line-height: 21px;
    ${media.laptopXl`
      font-size: 16px; 
      margin-right: 25px;
    `}
    ${media.laptop`
      font-size: 14px; 
    `}
  }
  .arrow {
    vertical-align: middle;
    margin-top: 1px;
    position: absolute;
    top: 40px;
    text-align: right;
    width: 15px;
    font-weight: bold;
    color: #9ea3a9;
    transition: 300ms all;
  }
  ul {
    position: absolute;
    top: 90px;
    left: 0;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    background: #fff;
    border-top: 2px solid #6a94fa;
    transition: 150ms all;
    transform: translateY(-100%);
    opacity: 0;
    z-index: -1;
    box-shadow: none;
    transform: scale(0);
    transform-origin: top right;
    padding: 20px;
    li {
      line-height: 30px;
      padding: 3px 10px;
      text-align: left;
      font-weight: bold;
      color: #9da2a7;
      cursor: pointer;
      i {
        padding-right: 10px;
      }
      &:hover {
        background: #fff;
      }
      a {
        color: inherit;
      }
    }
  }
`;

export const LoginButton = styled(Button)`
  width: 150px;
  margin: 25px 50px;
  color: #5e8eff;
  border: 2px solid #5e8eff;
  font-size: 16px;
  padding: 10px;
  height: auto;
`;

export const Banner = styled.div`
  font-family: "Lato";
  height: 412px;
  width: 100%;
  margin-top: 0;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(90deg, #9882f5 0%, #6592fa 100%);
  &.specific {
    height: 266px;
    background: linear-gradient(88.42deg, #f37f64 0%, #ef6780 100%);
    &.STM_Migration {
      background: linear-gradient(88.42deg, #d62027 0%, #ff3e45 100%);
    }
    &.iStack_Training {
      background: linear-gradient(88.42deg, #029bdf 0%, #02aae9 100%);
    }
    h1 {
      text-align: center;
    }
    .content {
      background-image: none;
    }
    img {
      z-index: 1;
      position: relative;
    }
    .suffix {
      right: -450px;
      top: 28px;
      opacity: 0.5;
    }
    .prefix {
      position: absolute;
      left: -360px;
      opacity: 0.5;
      top: 27px;
      ${media.laptopMmd`
      display: none;`};
    }
  }
  .content {
    max-width: 1290px;
    margin: auto;
    height: 100%;
    padding: 75px 0 0 0;
    background-image: url(${Mask});
    background-repeat: no-repeat;
    background-position: center;
    background-position-x: 57%;
    ${media.laptopMmd`
      padding: 75px 30px;
    `}
    img {
      height: 101px;
      display: block;
      margin: 10px auto;
      ${media.phone`
        width: 100%;
      `};
    }
  }
  h1 {
    color: #ffffff;
    font-size: 48px;
    font-weight: bold;
    line-height: 53px;
    margin-bottom: 23px;
    ${media.laptopMmd`
      font-size: 30px;
      line-height: 33px;
    `}
  }
  h3 {
    color: #ffffff;
    font-size: 18px;
    line-height: 22px;
    margin: 0;
    margin-bottom: 23px;
    ${media.laptopMmd`
      font-size: 17px;
      /* text-align: center; */
    `}
  }
  img {
    &.suffix {
      position: absolute;
      right: -320px;
      bottom: 5px;
      ${media.laptopMmd`
        display: none;
      `}
    }
    &.styled-img_home-banner-asset {
      position: absolute;
      height: 100%;
      max-height: 75%;
      right: 1%;
      bottom: 1%;
      ${media.xlgDesktop`
        right: 19%;
      `}
      ${media.laptopXl`
        max-height: 65%;
      `}
      ${media.laptop`
        display: none;
      `}
      ${media.laptopMmd`
        display: none;
      `}
    }
  }
  button {
    ${media.laptopMmd`
      display: none !important;
    `}
  }
`;

export const FunctionButton = styled(Button)`
  height: 69px;
  width: 198px;
  background-color: #6590fa !important;
  border-radius: 0;
  font-size: 20px !important;
  font-weight: bold;
  line-height: 24px !important;
  text-align: center;
  height: 69px !important;
`;

export const ProductContainer = styled.div`
  max-width: 1245px;
  margin: 36px auto;
  font-family: "Lato";
  ${media.laptopMmd`
    margin: 20px auto;
  `}
  h1 {
    color: #454f5b;
    font-size: 20px;
    font-weight: bold;
    line-height: 102px;
    ${media.laptopMmd`
      line-height: 50px;
      text-align: center;
    `}
  }
  h2 {
    color: #454f5b;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    margin: 20px auto 0;
    min-height: 50px;
    max-width: 200px;
    /* height: 48px; */
    /* overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; */
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  h3 {
    color: #a5aeb7;
    font-size: 18px;
    line-height: 24px;
    margin-top: 25px;
    min-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  button {
    height: 59px;
    width: 175px;
    background-color: #6590fa !important;
    box-shadow: none;
    border-radius: 0;
    margin: 25px 0 0;
    font-size: 20px;
    font-weight: normal;
    line-height: 24px;
    text-transform: capitalize;
    &[disabled] {
      background: #f0f2f5 !important;
    }
  }
  .ant-card-bordered {
    margin: 15px;
    box-shadow: 0 2px 19px 0 rgba(26, 135, 183, 0.04);
    border: none;
  }
  .ant-card-body {

    text-align: center;
    min-height: 525px;
    padding: 40px 40px 45px;

    .card-wrapper{
      background-size: 200px;
      background-repeat: no-repeat;
      background-position: top center;
    }


  }
  .price {
    display: block;
    color: #5e8eff;
    font-size: 36px;
    font-weight: bold;
    line-height: 44px;
    margin: 15px 0;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .payment-cycle {
    color: #959faa;
    font-size: 14px;
    line-height: 17px;
    margin-top: 10px;
    display: block;
  }
`;
