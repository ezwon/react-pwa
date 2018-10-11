import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import { Row, Col, Icon, Button } from "antd";
import Tabs from "@ant-components/Tabs";
import Invoices from "./components/Invoices";
import TransactionHistory from "./components/TransactionHistory";
import { ExtraPanel } from "./styles";
import {
  billingsFindRequest,
  billingsInvoicesFindRequest,
  billingsTransactionsFindRequest,
} from "./actions";

class Billings extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.billingsFindRequest({ $limit: 10 });
  }

  handleRowKey = record => {
    return record._id;
  };

  handleInvoicePageRequest = payload => {
    this.props.billingsInvoicesFindRequest(payload);
  };

  handleTransactionPageRequest = payload => {
    this.props.billingsTransactionsFindRequest(payload);
  };

  render() {
    const { billings, isLoading } = this.props;

    const invoiceData = _.get(billings,"invoicesTable.data",{});
    const transactionData = _.get(billings,"invoicesTable.data",{});

    return (
      <Row>
        <h1>Billing</h1>
        <Col lg={17} md={24}>
          <Tabs
            tabs={[
              {
                key: 1,
                tab: "Invoices",
                content: (
                  <Invoices
                    data={invoiceData}
                    isLoading={isLoading}
                    handleInvoicePageRequest={this.handleInvoicePageRequest}
                    handleRowKey={this.handleRowKey}
                  />
                ),
              },
              {
                key: 2,
                tab: "Transaction History",
                content: (
                  <TransactionHistory
                    data={transactionData}
                    isLoading={isLoading}
                    handleTransactionPageRequest={
                      this.handleTransactionPageRequest
                    }
                    handleRowKey={this.handleRowKey}
                  />
                ),
              },
            ]}
          />
        </Col>
        <Col lg={{ span: 6, offset: 1 }} md={24}>
          <ExtraPanel>
            <Icon type="solution" />
            <h1>Need Help?</h1>
            <p>
              Contact support if you have any issues ragarding your payments.
            </p>
            <Button type="primary"> Contact Us</Button>
          </ExtraPanel>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  const { billings, isLoading, isSaving } = state;
  return {
    billings,
    isLoading,
    isSaving,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      billingsFindRequest,
      billingsInvoicesFindRequest,
      billingsTransactionsFindRequest,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Billings);
