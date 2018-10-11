import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Form } from "antd";
import { connect } from "react-redux";
// import AntPopover from "@ant-components/Popover";

import { productsListRequest } from "../products/actions";
import {
  discountsFindRequest,
  discountSaveRequest,
  discountRemoveRequest,
} from "./actions";
import { getProductsForGroupList } from "../products/selectors";

import _ from "lodash";

import { AppWrapper, AppDrawer } from "@ant-components";
import { Content, Table, TableActions, Button } from "../common/components";
import DiscountForm from "./components/Form";

class Discounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountsTableData: {
        limit: 0,
        total: 0,
        skip: 0,
        data: [],
      },

      displayForm: false,
      discount: {},
      isNew: false,
    };

    this.columns = [
      {
        title: "Code",
        dataIndex: "_id",
        sorter: true,
      },
      {
        title: "Description",
        dataIndex: "description",
        width: "20%",
      },
      {
        title: "Type",
        dataIndex: "type",
      },
      {
        title: "Value",
        dataIndex: "value",
        render: (value, record) => {
          if (record.type === "percent") {
            return `${value}%`;
          } else {
            return value;
          }
        },
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
      },
      {
        title: "Quantity limit",
        dataIndex: "quantity_limit",
      },
      {
        title: "Expired At",
        dataIndex: "expired_at",
        render: value => {
          return value ? new Date(value).toLocaleString() : value;
        },
      },
      {
        title: "Products",
        dataIndex: "products",
        render: (value, record) => {
          return this.productsColumnRenderer(value, record);
        },
      },
      {
        title: "Actions",
        dataIndex: "operations",
        width: 120,
        render: (value, record) => (
          <TableActions
            description={record._id}
            record={record}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
          />
        ),
      },
    ];
  }

  componentWillMount() {
    this.props.discountsFindRequest();
    this.props.productsListRequest();
  }

  refresh = () => {
    this.props.discountsFindRequest();
  };

  productsColumnRenderer = (value, record) => {
    if (!value) {
      return null;
    } else {
      const numOfProducts = record.products_details
        ? record.products_details.length
        : 0;
      const { products_details: products } = record;

      if (!numOfProducts) {
        return;
      } else if (numOfProducts === 1) {
        return <span>{products[0].name}</span>;
      }

      const content = (
        <div>
          {_.map(products, (product, i) => {
            return <p key={i}>{product.name}</p>;
          })}
        </div>
      );

      return (
        <AntPopover content={content} title={"Products"} trigger="click">
          <span>
            <a href="#">
              {`${products[0].name} & ${numOfProducts - 1} more...`}
            </a>
          </span>
        </AntPopover>
      );
    }
  };

  handleRowKey = record => {
    return record._id;
  };
  handleDelete = id => {
    this.props.discountRemoveRequest({ id, onSuccess: this.refresh });
  };
  handleAdd = () => {
    this.setState({ displayForm: true, discount: {}, isNew: true });
  };
  handleEdit = (id, record) => {
    this.setState({ displayForm: true, discount: record, isNew: false });
  };
  handleCancel = () => {
    this.setState({ displayForm: false, discount: {} });
  };
  handleSuccess = () => {
    this.setState({ displayForm: false, discount: {} });
    this.refresh();
  };

  render() {
    const {
      discountSaveRequest,
      isLoading,
      discountsFindRequest,
      isSaving,
      list,
      productsList,
    } = this.props;
    const { displayForm, discount, isNew } = this.state;
    const title = isNew ? "New Discount" : "Update Discount";
    return (
      <AppWrapper>
        <Content>
            <Button
              type="primary"
              icon="plus-circle-o"
              size="large"
              disabled={isLoading || isSaving}
              onClick={this.handleAdd}
            >
              Add Discount
            </Button>
            <Button
              type="primary"
              shape="circle"
              icon="reload"
              disabled={isLoading}
              onClick={this.refresh}
              style={{
                float: 'right',
              }}
            />
          <Table
            bordered
            columns={this.columns}
            list={list}
            rowKey={this.handleRowKey}
            getList={discountsFindRequest}
            loading={isLoading}
            style={{
              marginTop: '15px',
            }}
          />

          <AppDrawer
            title={title}
            visible={displayForm}
            handleCancel={this.handleCancel}
          >
            <DiscountForm
              data={discount}
              saveRequest={discountSaveRequest}
              isLoading={isLoading}
              isSaving={isSaving}
              onSuccess={this.handleSuccess}
              displayForm={displayForm}
              productsList={productsList}
              isNew={isNew}
            />
          </AppDrawer>
        </Content>
      </AppWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { discountsTable, isLoading, isSaving } = state;

  return {
    list: discountsTable,
    isLoading,
    isSaving,
    productsList: getProductsForGroupList(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      discountsFindRequest,
      discountSaveRequest,
      discountRemoveRequest,
      productsListRequest,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Discounts);
