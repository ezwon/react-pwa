import styled from "styled-components";
import { Modal} from "antd";
import {media, fontFamily} from "@common/styles/helpers-styles";

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
