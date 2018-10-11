import styled from "styled-components";
import {color, media} from "@common/styles/helpers-styles";
import {Layout, Collapse} from "antd";

const Panel = Collapse.Panel;


const {Sider, Header, Content, Footer} = Layout;

export const StyledAppContainer = styled(Layout)`
  min-height: 100vh;
  overflow: hidden;
`;

export const StyledMainContainer = styled(Layout)`
  position:relative;
  padding-top: 64px;

  ${media.tablet`
    background-color: #ffffff !important;
  `};
`;

export const StyledModuleContainer = styled(Content)`

  padding: 30px;
  overflow-x: scroll;
  min-height: 500px;
  max-height: calc(100vh - 90px);
  margin: 0;

  ${media.tablet`
    padding: 0;
    margin: 0;
  `};
`;

export const StyledHeader = styled(Header)`
  position: fixed;
  padding: 0 14px !important;
  left: 0;
  top: 0;
  width: 100%;
  color: ${color.white};
  z-index: 100;
  background: linear-gradient(to right, #9882f5, #6590fa) !important;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.5),
    0 3px 41px 0 rgba(0, 0, 0, 0.1);

  .styled-icon_account-side-menu {
    &:hover {
      cursor: pointer;
    }
  }

  .desktop-menu-toggle{
    display: inline-block;
  }

  .mobile-menu-toggle{
    display: none;
  }

  .header-menu-section {
    text-align: right;
  }

  .site-logo {
    display: inline-block;
    height: 35px;
    margin: 15px;
  }

  ${media.phone`
  padding: 0 20px;
  `}

  ${media.tablet`
    .desktop-menu-toggle{
      display: none;
    }

    .mobile-menu-toggle{
      display: inline-block;
    }
  `}
`;

export const StyledSideMenu = styled(Sider)`
  min-height: 100vh;
  z-index: 2;
  padding-top: 64px;

  background: #fff !important;
  flex: 0 0 410px !important;
  width: 410px !important;
  max-width: 410px !important;

  &.ant-layout-sider-collapsed{

    flex: 0 0 80px !important;
    max-width: 80px !important;
    min-width: 80px!important;
    width: 80px !important;

    .ant-menu-item > span {
      display:none !important;
    }

  	div[class*="Avatar"]{

      .image-border{
        height: 55px;
        width: 55px;
      }

      img{
       height: 45px;
       width: 45px;
      }

  	  span{
  	    display: none !important;
  	  }
  	}
  }

  .ant-collapse{
    > .ant-collapse-item{
      border: 0;
      .ant-collapse-header{
        background: #FAFCFF;
        border-bottom: 1px solid #D0D3D9;
        border-top: 1px solid #D0D3D9;
        color: #323648;
        font-size: 16px;
        font-weight: bold;
        padding: 13px 40px !important;
        text-transform: uppercase;
      }
    }
  }

   ${media.tablet`
    display:none;
  `};
`;

export const StyledMobileRightSideMenuWrapper = styled.div`
  position: fixed;
  background: ${color.white};
  width: 300px;
  height: calc(100vh - 65px);
  top: 64px;
  display:none;
  transition: 300ms all;
  transform: translateX(100vw);
  overflow-y: auto;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.5),
    0 3px 41px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;

  &.open {
    transform: translateX(calc(100vw - 315px));
  }

  ${media.tablet`
     display:inline-block;
  `};

  .ant-collapse{
    > .ant-collapse-item{
      border: 0;
      .ant-collapse-header{
        background: #FAFCFF;
        border-bottom: 1px solid #D0D3D9;
        border-top: 1px solid #D0D3D9;
        color: #323648;
        font-size: 16px;
        font-weight: bold;
        padding: 13px 40px !important;
        text-transform: uppercase;
      }
    }
  }
`;

export const StyledMenuItems = styled.div`
  position: relative;

  .ant-menu-inline{
   border-right: none !important;
  }
`;

export const StyledAvatar = styled.div`
  text-align: center;
  padding: 0;
  .avatar-wrapper{
    height: 220px;
    position: relative;
    .avatar-bg{
      background: #5C6705;
      height: 135px;
    }
  }
  .todo{
    padding: 10px 40px 30px 40px;
    h1{
      font-size: 28px;
      font-weight: bold;
      line-height: 34px;
    }
    p{
      color: #323648;
      font-size: 20px;
      margin-top: 10px;
    }
    .ant-input{
      border: 0;
      border-bottom: 1px solid #308EFB;
      border-radius: 0;
      color: #308EFB;
      font-size: 23px;
      text-align: center;
      padding: 20px 0;
      margin-top: 10px;
      &:focus{
        box-shadow: 0 0 0 0;
      }
    }
  }
  img {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    padding: 0;
    z-index: 4;
    display: block;
    margin: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: 4px solid white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  }
  span {
    font-size: 19px;
    color: #38455b;
    padding: 10px 0;
    display: block;
    font-weight: 500;
  }
`;

export const StyledFooter = styled(Footer)`
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 4px 0 !important;
  font-size: 10px !important;
  left: 0;
  z-index: 9;
  border-top: 1px solid #dddee0;
`;


export const StyledCollapse = styled(Collapse)`
  position:relative;
  //overflow-x: scroll;
  //max-height: calc(100vh - 300px);
`;


export const StyledPanel = styled(Panel)`
  position:relative;
  .cal-add-btn{
    position: absolute;
    top: 0;
    right: 25px;
    margin-top: 13px;
    .anticon{
      color: #308EFB;
      cursor: pointer;
      font-size: 24px;
    }
  }
`;

