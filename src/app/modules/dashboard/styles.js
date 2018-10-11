import styled from "styled-components";

export const StyledDashboardWrapper = styled.div`
  position: relative;
  .ant-collapse{
    background: transparent;
  }
  .ant-collapse-item{
    background: #fff;
    margin: 30px 0;
    &.guides{
      > .ant-collapse-header{
        display: none;
      }
      .ant-collapse-content{
        .ant-collapse-content-box{
          padding: 0;
        }
      }
    }
  }
`;
