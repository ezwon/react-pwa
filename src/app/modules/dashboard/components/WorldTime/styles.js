import styled from "styled-components";

export const StyledWorldTime = styled.div`
  position: relative;
  padding: 25px;
  .ant-select{
    margin-bottom: 10px;
  }
  .timezones{
    padding: 10px 0 30px;
    .timezone{
      box-shadow: 0 1px 8px 0 rgba(12,0,51,0.06);
      padding: 15px;
      margin-bottom: 10px;
      h2, h3{
        font-size: 18px;
        font-weight: bold;
        line-height: 22px;
      }
      p{
        font-size: 14px;
      }
      .side{
        text-align: right;
      }
    }
  }
`;
