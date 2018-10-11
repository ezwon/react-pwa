import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import moment from "moment";
import _ from "lodash";
import {Collapse, Icon, Divider, message} from "antd";

import {Table} from "@modules/common/components";
import {BillingPanel, PageCollapse} from "../styles";
import config from "@config";

import {shopAddToCart} from "../../shop/actions";

const Panel = Collapse.Panel;

export const InvoiceProducts = props => {
  const {items} = props;
  return (
    <div>
      {
        _.map(items, (item) => {
          return (
            <h3 key={item.item_id}>
              {item.name}
            </h3>
          );
        })
      }
    </div>
  );
};

class Invoices extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Invoice",
        dataIndex: "invoice_number",
      },
      {
        title: "Amount",
        dataIndex: "amount",
        render: (value, record) => <span> {record.currency} {record.amount_paid.toFixed(2)} </span>
      },
      {
        title: "Date",
        dataIndex: "created_at",
        render: value => moment(new Date(value)).format("MMM-DD-YYYY"),
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (value) => {
          return <span
            className={
              value.toLowerCase() === "success" ||
              value.toLowerCase() === "paid"
                ? "success"
                : "error"
            }
          >
            {value}
          </span>;
        },
      },
      {
        title: "",
        dataIndex: "actions",
        width: 120,
        render: (value, record) => (
          <div style={{textAlign: "center"}}>
            <Icon type="file" title="View" onClick={() => {
              this.handleView(record);
            }}/>
            <Divider type="vertical"/>
            <Icon type="download" title="Download" onClick={() => {
              this.handleDownload(record);
            }}/>
            <Divider type="vertical"/>
            <Icon type="wallet" title="Pay Now" onClick={() => {
              this.handleCheckOut(record);
            }}/>
          </div>
        ),
      },
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

  handleCheckOut = record => {
    message.loading("Processing Checkout...", 1, () => {
      console.log(record);
      this.props.history.push(`/cart?invoice=${record._id}`);
    });
  };

  render() {
    const {
      data,
      isLoading,
      handleInvoicePageRequest,
      handleRowKey,
    } = this.props;

    const grouped =
      data && _.groupBy(data, "branch_id");

    return (
      <BillingPanel>
        <PageCollapse bordered={false} defaultActiveKey={["1"]}>
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
                  getList={handleInvoicePageRequest}
                  expandedRowRender={record => <InvoiceProducts items={record.items}/>}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      shopAddToCart,
    },
    dispatch
  );
}

export default withRouter(connect(null, mapDispatchToProps)(Invoices));
