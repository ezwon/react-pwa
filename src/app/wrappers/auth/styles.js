import styled, { keyframes } from "styled-components";
import { Layout } from "antd";
import { color, media } from "@common/styles/helpers-styles";

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

export const Content = styled.div`
  position: relative;
  background: ${color.white} top no-repeat;
  background-size: contain;
  color: ${color.white};
  min-height: 900px;
  height: 100vh;
  h1 {
    color: ${color.black};
  }
  > div {
    text-align: center;
    i {
      font-size: 60px;
      color: #6590fa;
      position: relative;
      z-index: 1;
      display: block;
      transform: translateY(-50%);
      margin-top: 50vh;
      &:before {
        text-align: center;
        left: 0;
        right: 0;
        top: 28px;
        z-index: 1;
        display: block;
      }
      &:not(.success):after {
        content: "";
        background: #f0f5ff;
        width: 110px;
        height: 110px;
        display: block;
        text-align: center;
        margin: auto;
        z-index: -1;
        border-radius: 50%;
        animation: ${animateScale} 1s linear infinite;
        position: absolute;
        top: -22px;
        left: 0;
        right: 0;
      }
      &.success {
        color: #52c41a;
      }
    }
  }

  ${media.xlgDesktop`
    background-size: cover;
  `} ${media.laptop`
    width: 100%;
    min-height: 500px;
  `};
`;

export const Wrapper = styled(Layout)`
  font-size: 10px;
  background: ${color.white};
  background-size: cover;
  position: relative;
  color: ${color.black};
  width: 100%;
  height: 100vh;
`;

export const Text = styled.h1`
  margin: 0;
  color: ${color.black};
`;

export const TokenPage = styled.div`
  padding: 150px 20px;
  font-family: Lato;
  color: #6592fa;
  text-align: center;
  img {
    max-width: 430px;
    width: 100%;
    margin: auto;
    display: block;
  }
  .title {
    /* color: #6592fa; */
    font-size: 36px;
    font-weight: bold;
    line-height: 44px;
    margin: 60px 0 0;
    display: block;
  }
  p {
    font-size: 24px;
    margin: 0;
  }
  button {
    box-shadow: none !important;
    border-radius: 0;
    display: block;
    margin: 60px auto 0;
    height: 69px;
    width: 198px;
    font-family: Lato;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
  }
`;
