import styled from "styled-components";
import { Layout } from "antd";
import { color, media } from "@common/styles/helpers-styles";
const { Header } = Layout;
// export const Content = styled.div`
//   position: relative;
//   background: ${color.black} top no-repeat;
//   background-size: contain;
//   color: ${color.white};
//   min-height: 900px;
//   height: 100vh;
//   ${media.xlgDesktop`
//     background-size: cover;
//   `} ${media.laptop`
//     width: 100%;
//     min-height: 500px;
//   `};
// `;

export const Wrapper = styled(Layout)`
  font-family: "Lato";
  font-size: 10px;
  background: ${color.white};
  background-size: cover;
  position: relative;
  color: ${color.black};
  width: 100%;
  overflow-x: hidden;
  height: 100%;
`;

export const WrapperOffWhite = styled(Layout)`
  font-family: "Lato";
  font-size: 10px;
  background: ${color.white} !important;
  background-size: cover;
  position: relative;
  color: ${color.black};
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`;

export const CartHeader = styled(Header)`
  background: linear-gradient(270deg, #6592FA 0%, #9882F5 100%) !important;
  height: 90px !important;
  line-height: 90px !important;
  box-shadow: 0 -2px 37px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  overflow-x: hidden;
  position: relative;
  ${media.phone`
    height: 50px !important;
  `}
  .styled-div_cart-wrapper_logo-wrapper {
    /* margin: 0 auto;
    display: block;
    width: 100%;
    border: 1px solid red;  */
    img {
      width: 100%;
      max-width: 270px;
      margin: 0 auto;
      padding: 20px 0;
      display: block;
      ${media.phone`
        width: 143px;
        padding: 12px 0px;
      `}
    }
  }
  img {
    &.styled-img_header-graphic {
      position: absolute;
      bottom: 10px;
      opacity: 0.2;
      height: 172px;
      ${media.desktopSm`
        height: 140px;
      `}
      ${media.laptopXl`
        height: 130px;
      `}
      ${media.laptop`
        height: 120px;
      `}
      ${media.laptopSm`
        height: 90px;
      `}
      &._default {
        left: 0;
        ${media.desktopSm`
          left: -110px;
        `}
        ${media.laptopXl`
          left: 0px;
        `}
        ${media.laptop`
          left: -150px;
        `}
        ${media.laptopSm`
          left: -90px;
        `}
      }
      &._reversed {
        right: 0;
        ${media.desktopSm`
          right: -110px;
        `}
        ${media.laptopXl`
          right: 0;
        `}
        ${media.laptop`
          right: -150px;
        `}
        ${media.laptopSm`
          right: -90px;
        `}
      }
    }
  }
`;

// export const LoginButton = styled(Button)`
//   margin-top: 40vh;
//   transform: translateY(-50%);
//   min-width: 150px;
// `;
