import styled from "styled-components";

export const StyledGuides = styled.div`
  position: relative;
  .guides-header{
    background: #323648;
    padding: 15px 30px;
    border-radius: 4px 4px 0 0;
    position: relative;
    h2{
      color: #fff;
      font-size: 26px;
      font-weight: bold;
    }
    .ant-input-search{
      position: absolute;
      top: 50%;
      right: 20px;
      max-width: 400px;
      margin-top: -20px;
      .ant-input{
        border: 1px solid rgba(50,54,72,0.2);
        border-radius: 2px;
        background: rgba(250,252,255,0.11);
        color: #fff;
        padding: 6px 11px 6px 50px;
        &:focus{
          box-shadow: 0 0 0 0;
        }
      }
      .ant-input-suffix{
        right: auto;
        left: 20px;
        .anticon{
          font-size: 20px;
          color: #fff;
        }
      }
    }
  }
  .ant-menu{
    .ant-menu-submenu-title{
      font-size: 20px;
      font-weight: bold;
    }
    .ant-menu-item{
      font-size: 18px;
      line-height: 27px;
    }
  }
  .ant-layout-content{
    background: #fff;
    .ant-layout{
      .ant-layout-content{
        padding: 20px 50px;
      }
    }
  }
  .ant-card{
    border: 1px solid #D0D3D9;
    border-radius: 2px;
    margin-bottom: 20px;
    overflow: hidden;
    .ant-card-cover{
      img{
        border-radius: 0;
      }
    }
    .ant-card-meta-title{
      color: #323648;
      font-size: 21px;
      font-weight: bold;
    }
    .ant-card-meta-description{
      color: #323648;
      font-size: 16px;
    }
    .ant-card-actions{
      position: absolute;
      top: 15px;
      right: 10px;
      background: transparent;
      border: 0;
      > li{
        width: 100%;
        margin: 0;
        float: none;
      }
      .anticon{
        font-size: 26px;
        color: #fff;
        &:hover{
          color: #F9D500;
        }
      }
    }
    &.two-column{
      .ant-card-cover{
        position: absolute;
        left: 20px;
        top: 25px;
        width: 70px;
        height: 70px;
      }
      .ant-card-meta{
        padding-left: 85px;
      }
    }
  }
  .content-group{
    border-bottom: 1px solid #D0D3D9;
    padding: 20px 0 10px;
    margin-bottom: 10px;
    &:last-child{
      border: 0;
    }
    h2{
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
  .starred-items{
    .ant-card{
      .ant-card-meta-title{
        margin-bottom: 0;
      }
      .ant-card-meta-description{
        color: #848691;
      }
      .ant-card-body{
        padding: 15px 24px;
      }
    }
  }
`;
