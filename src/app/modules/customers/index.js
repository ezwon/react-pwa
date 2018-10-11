import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";

import { customersFindRequest, customerSaveRequest } from "./actions";
import { AppWrapper, AppDrawer } from "@ant-components";

import { Content, Table, TableActions } from "../common/components";
import CustomerForm from "./component/CustomerForm";

import CustomerTransactions from "./component/CustomerTransactions";

class Customers extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Full Name",
        dataIndex: "full_name",
      },
      {
        title: "Date Created",
        dataIndex: "created_at",
        render: value => moment(new Date(value)).format("MM-DD-YYYY"),
      },
      {
        title: "",
        dataIndex: "operations",
        render: (value, record) => (
          <TableActions
            description={record.full_name}
            record={record}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
          />
        ),
      },
    ];

    this.state = {
      displayForm: false,
      customer: {},
    };
  }

  componentWillMount() {
    this.props.customersFindRequest({ $limit: 10 });
  }

  handleRowKey = record => {
    return record._id;
  };

  onDelete = id => {
    // TODO handle implementation
    // eslint-disable-next-line
    console.log("deleting: ", id);
    this.setState({ showDialog: true });
  };

  onEdit = (id, record) => {
    // const customer = Object.assign({}, record);
    this.setState({ displayForm: true, customer: record });
  };

  handleCancel = () => {
    this.setState({ displayForm: false, customer: {} });
  };

  handleSuccess = () => {
    this.setState({ displayForm: false, customer: {} });
    this.props.customersFindRequest();
  };

  handleExpandRowRender = record => {
    return <CustomerTransactions record={record} />;
  };

  handleCustomerPageRequest = payload => {
    this.props.customersFindRequest(payload);
  };

  render() {
    const {
      customersTable,
      customerSaveRequest,
      isLoading,
      isSaving,
    } = this.props;
    const { displayForm, customer } = this.state;
    return (
      <AppWrapper>
        <Content>
          <Table
            columns={this.columns}
            expandedRowRender={this.handleExpandRowRender}
            list={customersTable}
            rowKey={this.handleRowKey}
            getList={this.handleCustomerPageRequest}
            loading={isLoading}
          />

          <AppDrawer
            title="Update Customer"
            visible={displayForm}
            handleCancel={this.handleCancel}
          >
            <CustomerForm
              data={customer}
              saveRequest={customerSaveRequest}
              isLoading={isLoading}
              isSaving={isSaving}
              onSuccess={this.handleSuccess}
              displayForm={displayForm}
            />
          </AppDrawer>
        </Content>
      </AppWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { customersTable, isLoading, isSaving } = state;

  return {
    customersTable,
    isLoading,
    isSaving,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      customersFindRequest,
      customerSaveRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Customers);
