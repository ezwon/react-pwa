import styled from "styled-components";
import { color, media } from "@common/styles/helpers-styles";
import AntButton from "@ant-components/Button";
import OvalBackground from "@resources/images/landing/oval-background.png";
import ParticlesBackground from "@resources/images/landing/particles.png";

export const StyledWrapper_IstackAccountsAdmin = styled.div`
  font-size: 10px;
  background: ${color.white};
  background-size: cover;
  position: relative;
  color: ${color.black};
  width: 100%;
  height: 100%;
  background-image: url(${OvalBackground});
  background-size: 61%;
  background-repeat: no-repeat;
  background-position: top right;
  margin: auto;
  overflow-x: hidden;
  ${media.xlgDesktop`
    background-size: 48%;
  `}
  ${media.lgDesktop`
    background-size: 61%;
  `}
  ${media.desktop`
    background-size: 60%;
  `}
  ${media.tablet`
    background-size: 60%;
  `}
  ${media.phone`
    background-size: 50%;
  `}
  > div {
    position: relative;
    background: transparent top no-repeat;
    background-size: cover;
    font-family: 'Lato', sans-serif;
    color: ${color.white};
    max-width: 1920px; 
    margin: auto;
    min-height: 900px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0;
    ${media.xlgDesktop`
    
    `} 
    ${media.laptop`
      width: 100%;
      min-height: 500px;
    `}
    .styled-row_istack-network_bg_image {
      background-image: url(${ParticlesBackground});
      background-repeat: no-repeat;
      min-height: 1100px;
      ${media.xlgDesktop`
        background-size: 48%;
      `}
      ${media.desktop`
        min-height: 700px;
        background-size: contain;
      `}
      ${media.laptop`
        min-height: 500px;
      `}
      ${media.laptopMmd`
        background-size: 52%;
      `}
      ${media.tabletSm`
        background-size: 48%;
      `}
      ${media.phone`
        background-size: 59%;
      `}
    }
    .styled-col_istack-network {
      margin-top: 23em;;
      overflow-x: hidden;
      overflow-y: hidden;
      ${media.desktop`
        margin-top: 13em;;
      `}
      ${media.laptop`
        margin-top: 8em;;
      `}
      &._istack-network_text-block {
        margin-left: 20px;
        padding-left: 20em;      
        ${media.xlgDesktop`
          padding-left: 17em;      
        `}
        ${media.lgDesktop`
          padding-left: 18em;
        `}
        ${media.desktop`
          padding-left: 16em;
        `}
        ${media.laptopXl`
          padding-left: 10em;
        `}
        ${media.laptop`
          padding-top: 3em;
          padding-left: 2em; 
        `}
        ${media.laptopMmd`
          padding-left: 2em; 
          padding-right: 2em; 
          max-width: 80%;
          margin: 10em  auto 0;  
          display: block; 
        `}
        ${media.laptopMd`
          margin: 7em  auto 0;   
        `}
        ${media.tabletSm`
          max-width: 90%;
        `}
        ${media.phone`
          margin-top: 5em;
          max-width: 100%;
        `}
        h3 {
          color: #6592FA;
          font-size: 36px;
          letter-spacing: 1px;
          font-weight: 600;	
          line-height: 44px;
          ${media.desktop`
            font-size: 28px;	
            line-height: 34px;
          `}
          ${media.laptopXl`
            font-size: 26px;	
            line-height: 32px;
          `}
          ${media.tablet`
            font-size: 20px;	
            line-height: 28px;
          `}
          ${media.phone`
            font-size: 16px;	
            line-height: 22px;
          `}
        }
        h1 {
          // letter-spacing: 1px;
          color: #454F5B;	
          font-size: 72px;	
          line-height: 80px;
          margin: 12px 0 20px;
          ${media.desktop`
            font-size: 46px;	
            line-height: 52px;
          `}
          ${media.laptopXl`
            font-size: 42px;	
            line-height: 48px;
          `}
          ${media.laptopXl`
            margin: 0px 0 20px;
          `}
          ${media.tablet`
            margin: 5px 0 5px;
          `}
          ${media.phone`
            font-size: 28px;	
            line-height: 32px;
          `}
        }
        p {
          color: #959faa;
          color: #959FAA;		
          font-size: 24px;	
          line-height: 32px;
          margin-bottom: 3em;
          letter-spacing: 1px;
          ${media.desktop`
            font-size: 1.7em;	
            line-height: 26px;
          `}
          ${media.laptopMd`
            font-size: 1.4em;	
          `}
          ${media.phone`
            font-size: 1.3em;	
            line-height: 20px;
          `}
        }
        .istack-network_styled-div-button-wrapper {
          max-width: 450px;
          ${media.laptopXl`
            max-width: 380px;
          `}
          ${media.laptopMd`
            max-width: 330px;
          `}
          ${media.tabletSm`
            max-width: 250px;
          `}  
        }
        .screenshot {
          max-height: 601px;
          height: 100%;
        }

      }
      &._istack-network_image-block {
        padding: 0 0 0 0;
        margin-left: -50px;
        ${media.xlgDesktop`
          margin-left: -120px;
        `}
        ${media.laptop`
          margin-top: 4em;;
          margin-left: auto;
        `}
         img {
          height: auto;
          margin-top: -20px; 
          ${media.desktop`
            height: 600px;
          `}
          ${media.laptop`
            height: auto;
            max-width: 800px; 
            margin: auto;
            display: block;
          `}
          ${media.laptopMmd`
            max-width: 150%; 
          `}
          ${media.tablet`
            max-width: 100%; 
          `}
         }
      }
    }
    .styled-col_istack-network_about {
      text-align: center;
      padding: 3em 10px 0;
      ${media.xlgDesktop  `
        padding: 3em 10px 0;
      `}
      ${media.desktop`
        padding-top: 10em;
      `}
      ${media.laptop`
        padding-top: 5em;
      `}
      ${media.tablet`
        padding-top: 0em;
      `}
      margin-top: 15px;
      h2 {
        color: #454F5B;	
        font-size: 48px;	
        line-height: 102px;
        ${media.desktop`
          font-size: 46px;	
          line-height: 52px;
        `}
        ${media.laptopXl`
          font-size: 42px;	
          line-height: 48px;
        `}
        ${media.laptopXl`
          margin: 0px 0 1em;
        `}
        ${media.tablet`
          margin: 1.5em 0 1em;
        `}
        ${media.phone`
          font-size: 28px;	
          line-height: 32px;
        `}
      }
      p {
        color: #959FAA;	
        font-size: 20px;	
        line-height: 24px;      
        margin-bottom: 5em;
        display: block;
        ${media.desktop`
          font-size: 1.7em;	
          line-height: 26px;
        `}
        ${media.laptopMd`
          font-size: 1.4em;	
        `}
        ${media.phone`
          font-size: 1.3em;	
          line-height: 20px;
          margin: 0 auto 5em;
          max-width: 280px;
          display: block; 
        `}
      }
      .styled-div_istack-network_logo-block {
        max-width: 1250px;
        margin: 8em auto 6em;
        display: block;
        ${media.tablet`
          margin: 4.5em auto 3em;
          max-width: 450px;
        `}
        a {
          &:hover {
            cursor: pointer;
          }
        }
        img {
          height: 100%;
          max-height: 50px;
          transition: .2s;
          transform: scale(1);
          -webkit-transform-style: preserve-3d;
          -webkit-backface-visibility: hidden;
          &:hover {
            transition: .15s;
            transform: scale(1.05);
            -webkit-transform-style: preserve-3d;
            -webkit-backface-visibility: hidden;
          }
          &._small-logo {
            max-height: 40px;
          }
          ${media.laptopMd`
            max-height: 40px;
            &._small-logo {
              max-height: 30px;
            }
          `}
          ${media.tablet`
            margin: 0 0 25px;
          `}
        }
      }
    }
    .styled-div_istack-network_footer-text {
      border-top: 1px solid #eaeaea;
      margin-top: 12em;
      padding-top: 2em;
      padding-bottom: 2em;
      p {
        color: #959FAA;	
        text-align: center;
        font-family: Lato;	
        font-size: 14px;	
        line-height: 17px;
      }
    }
  }
`;

export const BaseAntButton = styled(AntButton)`
  &.buttonBase {
    border: 4px solid #6592fa;
    font-family: Lato;	
    font-size: 20px;	
    letter-spacing: 1px;
    font-weight: bold;	
    line-height: 24px;	
    text-align: center;
    color: #6592fa;
    border-radius: 0;
    display: inline-block;
    width: 198px;
    height: 69px;
    ${media.laptopXl`
      font-size: 1.7em;	
      line-height: 26px;
      width: 170px;
      height: 54px;
    `}
    ${media.laptopMd`
      font-size: 1.4em;	
      line-height: 20px;
      width: 150px;
      height: 50px;
    `};
    ${media.tabletSm`
      font-size: 1.2em;	
      line-height: 16px;
      height: auto;
      padding: 8px 15px;
      width: 120px;
      border-width: 2px;
    `};  
    &.ant-btn-blue {
      background-color: ${color.landingblue};
      color: ${color.white};
      border: 4px solid ${color.landingblue};	
    }
    &.ant-btn-outline {
      background-color: ${color.white};
      color: ${color.landingblue};
      border: 4px solid ${color.landingblue};	
    }
  }  
`;
