import React, {Component} from "react";
import moment from "moment";
import _ from "lodash";
import {Collapse} from "antd";
import {Table} from "@modules/common/components";
import {BillingPanel, PageCollapse} from "../styles";

const Panel = Collapse.Panel;

import config from "@config";

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Date",
        dataIndex: "created_at",
        render: value => moment(new Date(value)).format("MMM-DD-YYYY"),
      },
      {
        title: "Type",
        dataIndex: "type",
      },
      {
        title: "Amount",
        dataIndex: "amount",
        render: (value, record) => <span>{record.currency_symbol} {record.amount && record.amount.toFixed(2)} </span>
      },
      {
        title: "Status",
        dataIndex: "status",
        render: value => (
          <span
            className={
              value.toLowerCase() === "success" ||
              value.toLowerCase() === "paid"
                ? "success"
                : "error"
            }
          >
            {value}
          </span>
        ),
      },
      // {
      //   title: "",
      //   dataIndex: "operations",
      //   width: 120,
      //   render: (value, record) => (
      //     <div style={{textAlign: "center"}}>
      //       <Icon type="file" onClick={() => {
      //         this.handleView(record);
      //       }}/>
      //       <Divider type="vertical"/>
      //       <Icon type="download" onClick={() => {
      //         this.handleDownload(record);
      //       }}/>
      //     </div>
      //   ),
      // },
    ];
  }

  handleView(record) {
    // eslint-disable-next-line no-console
    console.log("View:", record);
  }

  handleDownload(record) {
    // eslint-disable-next-line no-console
    console.log("Download:", record);
  }

  render() {
    const {
      data,
      isLoading,
      handleTransactionPageRequest,
      handleRowKey,
    } = this.props;

    const grouped = data && _.groupBy(data, "branch_id");

    return (
      <BillingPanel>
        <PageCollapse bordered={false}>
          {_.map(grouped, (item, index) => {
            return (
              <Panel
                header={
                  <div className="panel-header">
                    <div className="logo"/>
                    <span>{config.BRANCH_NAMES[item[0].branch_id]}</span>
                  </div>
                }
                key={index}
              >
                <Table
                  columns={this.columns}
                  list={{data: item}}
                  rowKey={handleRowKey}
                  getList={handleTransactionPageRequest}
                  loading={isLoading}
                />
              </Panel>
            );
          })}
        </PageCollapse>
      </BillingPanel>
    );
  }
}

export default TransactionHistory;
