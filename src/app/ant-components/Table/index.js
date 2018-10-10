import React, { Component } from "react";
import styled from "styled-components";
import { Table } from "antd";

const TableWrapper = styled(Table)`
  border-radius: 0;
  .ant-table {
    border-radius: 0;
    .ant-table-content {
      tr > td,
      .ant-table-thead > tr > th {
        border-right: 2px solid #eff2f8;
        border-bottom: 2px solid #eff2f8;
      }
      tr:hover > td {
        background: #f8f9fd;
      }
    }
    .ant-table-body {
      > table {
        border: 2px solid #eff2f8;
        border-width: 2px 0 0 2px;
      }
    }
  }
  .ant-table-thead > tr > th {
    background: #f8f9fd;
    font-size: 15px;
  }
  td {
    color: #96a6c1;
    i {
      color: #7d9bfa;
      font-size: 17px;
    }
  }
`;

export default class AntTable extends Component {
  render() {
    return <TableWrapper {...this.props} bordered />;
  }
}
