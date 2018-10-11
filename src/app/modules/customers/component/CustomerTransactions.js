import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {createStructuredSelector} from "reselect";

import {connect} from "react-redux";
import moment from "moment";
import _ from "lodash";

import {
  customerProductsFindRequest,
  customerTransactionsFindRequest,
  customerInvoicesFindRequest,
  customerBillingFindRequest,
} from "../actions";

import {productsFindRequest} from "../../products/actions";
import {makeSelectProductsForCreateInvoice} from "../../products/selectors";

import {Table} from "../../common/components";

import CustomerCreateInvoice from "../component/CustomerCreateInvoice";


import {Tabs} from "antd";

const TabPane = Tabs.TabPane;

class Customers extends Component {
  constructor(props) {
    super(props);

    this.columns = {
      products: [
        {
          title: "Branch",
          dataIndex: "branch_details.name",
        },
        {
          title: "Product",
          dataIndex: "product_details.name",
        },
        {
          title: "Status",
          dataIndex: "status",
        },
        {
          title: "Date Purchased",
          dataIndex: "created_at",
          render: (value) => moment(new Date(value)).format("MMM-DD-YYYY"),
        }],
      transactions: [
        {
          title: "Transaction Date",
          dataIndex: "created_at",
          render: (value) => moment(new Date(value)).format("MMM-DD-YYYY"),
        },
        {
          title: "Branch",
          dataIndex: "branch_id",
        },
        {
          title: "Status",
          dataIndex: "status",
          render: (value, record) => <a href={record.transaction_url} title="Check Transaction"
                                        target="_blank">{value}</a>,
        },

        {
          title: "Currency",
          dataIndex: "currency",
        },
        {
          title: "Amount",
          dataIndex: "amount",
        }],
      invoices: [
        {
          title: "Branch",
          dataIndex: "branch_details.name",
        },
        {
          title: "Invoice ID",
          dataIndex: "invoice_number",
        },
        {
          title: "Status",
          dataIndex: "status",
        },
        {
          title: "Currency",
          dataIndex: "currency",
        },
        {
          title: "Total Amount",
          dataIndex: "total_amount",
        },
        {
          title: "Amount Paid",
          dataIndex: "amount_paid",
        },
        {
          title: "Date",
          dataIndex: "created_at",
          render: (value) => moment(new Date(value)).format("MMM-DD-YYYY"),
        },
      ],
    };
  }

  componentWillMount() {
    const created_by = this.props.record.created_by;
    this.props.customerBillingFindRequest({created_by, $limit: 5});
  }

  handleCustomerProductsPageRequest = (payload) => {
    this.props.customerProductsFindRequest(Object.assign({created_by: this.props.record.created_by}, payload));
  };

  handleCustomerTransactionPageRequest = (payload) => {
    this.props.customerTransactionsFindRequest(Object.assign({created_by: this.props.record.created_by}, payload));
  };

  handleCustomerInvoicePageRequest = (payload) => {
    this.props.customerInvoicesFindRequest(Object.assign({created_by: this.props.record.created_by}, payload));
  };

  handleRowKey = (record) => {
    return record._id;
  };

  render() {
    const {
      customers, record,
      productSearchResult,
      productsFindRequest
    } = this.props;

    const tableID = record.created_by;
    const defaultTableData = {
      total: 0,
      limit: 0,
      skip: 0,
      data: [],
    };

    const productsTable = customers[tableID] && customers[tableID].productsTable || defaultTableData;
    const transactionsTable = customers[tableID] && customers[tableID].transactionsTable || defaultTableData;
    const invoicesTable = customers[tableID] && customers[tableID].invoicesTable || defaultTableData;

    const productsTableLoading = customers[tableID] && customers[tableID].isLoading || false;
    const transactionsTableLoading = customers[tableID] && customers[tableID].isLoading || false;
    const invoicesTableLoading = customers[tableID] && customers[tableID].isLoading || false;

    transactionsTable.data = _.filter(transactionsTable.data, item => {
      return item.status === "Success";
    });

    return (
      <Tabs type="card">
        <TabPane tab="Products" key="1">
          <Table
            columns={this.columns.products}
            list={productsTable}
            rowKey={this.handleRowKey}
            getList={this.handleCustomerProductsPageRequest}
            loading={productsTableLoading}
          />
        </TabPane>
        <TabPane tab="Transaction History" key="2">
          <Table
            columns={this.columns.transactions}
            list={transactionsTable}
            rowKey={this.handleRowKey}
            getList={this.handleCustomerTransactionPageRequest}
            loading={transactionsTableLoading}
          />
        </TabPane>
        <TabPane tab="Invoices" key="3">
          <Table
            columns={this.columns.invoices}
            list={invoicesTable}
            rowKey={this.handleRowKey}
            getList={this.handleCustomerInvoicePageRequest}
            loading={invoicesTableLoading}
          />
        </TabPane>
        <TabPane tab="Create Invoice" key="4">
          <CustomerCreateInvoice
            productSearchResult={productSearchResult}
            productsFindRequest={productsFindRequest}
          />
        </TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: state => state.isLoading,
  isSaving: state => state.isSaving,
  customers: state => state.customers,
  productSearchResult: makeSelectProductsForCreateInvoice,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    customerProductsFindRequest,
    customerTransactionsFindRequest,
    customerInvoicesFindRequest,
    customerBillingFindRequest,
    productsFindRequest,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
