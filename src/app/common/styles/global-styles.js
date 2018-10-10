import { injectGlobal } from "styled-components";
import {fontFamily, media} from "./helpers-styles";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    color: #fff;
    margin: 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  body {
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif!important;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
    font-size: 10px;
    color: #fff;
    @media (max-width: 1280px) {
      font-size: 8px;
    }
    @media (max-width: 768px) {
      font-size: 7px;
    }
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #EEF0F3;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  a {
  text-decoration: none;

    &:hover, &:focus, &:active{
      text-decoration: none;
    }
  }

  :focus {
    outline: none;
  }
  * {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif!important;
  }

  .ant-confirm{
    font-family: ${fontFamily.fontSecondary};
    width: 515px !important;
    .ant-modal-content{
      border: 1px solid #979797;
      border-radius: 10px;
      padding: 0 0 30px;
      .ant-modal-close{
        display: none;
      }
      .ant-modal-body{
        text-align: center;
        .ant-confirm-body{
          .anticon-question-circle{
            display: none;
          }
        }
        .ant-confirm-title{
          color: #454F5B;
          font-size: 20px;
          font-weight: bold;
          line-height: 24px;
          margin-top: 10px;
          overflow: unset;
          width: 100%;
          position: relative;
          padding-top: 55px;
          &:after{
            content: "!";
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -23px;
            display: block;
            width: 45px;
            height: 45px;
            background: #fff;
            border-radius: 50%;
            border: 3px solid #6592FA;
            color: #6592FA;
            font-size: 30px;
            font-family: arial !important;
            font-weight: normal;
            line-height: 38px;
          }
        }
        .ant-confirm-content{
          color: #95A5C0;
          font-size: 14px;
          margin-left: 0;
          width: 100%;
        }
        .ant-confirm-btns{
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
      }
    }
  }
  
  [id*="lpform"]{
    display: none;
  }
  
  
  ::-moz-selection { color:inherit !important; background: transparent !important; }
  ::selection { color:inherit !important;background: transparent !important; }
  
  .show-select {
    *::-moz-selection { color:#fff !important; background: #6592FA !important; }
    *::selection { color:#fff !important; background: #6592FA !important; }
  }
`;
