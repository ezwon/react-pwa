import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

import {Form, Icon, Divider, Popconfirm} from "antd";

import AppWrapper from "@ant-components/Section";
import Select from "@ant-components/Select";
import FormItem from "@ant-components/FormItem";
import AntModal from "@ant-components/Modal";

import {Table, Button} from "../common/components";
import {
  productsFindRequest,
  productRemoveRequest,
  productSaveRequest,
} from "./actions";

import {makeSelectProductTable} from "./selectors";

import {getBranchesForList} from "../branches/selectors";
import {
  makeSelectGroupedEventsList,
  makeSelectEventsList,
} from "../events/selectors";
import {
  productTableCategories as tableCategories,
  productTableColumns,
} from "./constants";

const productInitialState = {
  is_active: true,
  plan: {},
  fb_details: {},
  ga_details: {},
  ac_details: {},
  email_details: {},
};

import {RadioGroup} from "./styles";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOrg: "",
      activeEvent: "",
      edit: false,
      drawerVisible: false,

      isNew: false,
      displayForm: false,
      columns: "info",
      event: "",
      product: productInitialState,
      submitting: false,
    };
  }

  componentWillMount() {
    this.handleRefresh();
  }

  handleRefresh = () => {
    const {event} = this.state;
    const condition = {};
    if (event) condition.event_id = event;
    this.props.productsFindRequest(condition);
  };

  handleCancel = () => {
    this.setState({displayForm: false, product: productInitialState});
  };

  handleRowKey = record => {
    return record._id;
  };

  handleDelete = record => {
    console.log("Delete:", record);
    // this.props.productRemoveRequest({id, onSuccess: this.handleRefresh});
  };

  handleEdit = record => {
    console.log("Edit", record);
    // this.setState({product: record, isNew: false, displayForm: true});
  };

  handleAdd = () => {
    this.setState({
      displayForm: true,
      isNew: true,
      product: productInitialState,
    });
  };

  handleEventChange = e => {
    this.setState({event: e}, this.handleRefresh);
  };
  handleTableCategoryChange = e => {
    this.setState({columns: e.target.value});
  };
  handleSubmit = () => {
    this.setState({submitting: true});
    setTimeout(() => {
      this.setState({submitting: false});
    }, 500);
  };

  handleProductsPageRequest = (payload) => {
    this.props.productsFindRequest(Object.assign({event_id: this.state.event}, payload));
  };

  render() {
    const {isNew, displayForm} = this.state;
    const {
      groupedEventsList,
      productsTable,
    } = this.props;
    const title = isNew ? "New Product" : "Update Product";

    const columns = [
      {
        title: "ID",
        dataIndex: "_id",
      },
      ...productTableColumns[this.state.columns],
      {
        title: "Actions",
        dataIndex: "operations",
        render: (value, record) => (
          <div style={{textAlign: "center"}}>
            <Popconfirm
              placement="top"
              title={`Are you sure you want to delete ${record.name}`}
              onConfirm={() => {
                this.handleDelete(record);
              }}
              okText="Yes"
              cancelText="No"
            >
              <Icon type="delete"/>
            </Popconfirm>
            <Divider type="vertical"/>
            <Icon type="edit" onClick={() => {
              this.handleEdit(record);
            }}/>
            <Divider type="vertical"/>
            <a title="Edit" target="_blank" href={`/admin/product/${record._id}`}>
              <Icon type="export"/>
            </a>
          </div>
        ),
      },
    ];

    return (
      <AppWrapper>
        <Form>
          <Button
            type="primary"
            icon="plus-circle-o"
            size="large"
            onClick={this.handleAdd}
          >
            Add Product
          </Button>
          <FormItem label="Select Event">
            <Select
              items={groupedEventsList}
              onChange={this.handleEventChange}
              isGroup={true}
              emptyLabel={"ALL"}
            />
          </FormItem>
        </Form>

        <div style={{display: "block", textAlign: "right"}}>
          <RadioGroup
            items={tableCategories}
            defaultValue={this.state.columns}
            onChange={this.handleTableCategoryChange}
          />
        </div>
        <Table
          bordered={true}
          columns={columns}
          list={productsTable}
          rowKey={this.handleRowKey}
          loading={false}
          getList={this.handleProductsPageRequest}
        />
        <AntModal
          visible={displayForm}
          handleCancel={this.handleCancel}
          handleConfirm={this.handleSubmit}
          title={title}
          width={700}
        />
      </AppWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  productsTable: makeSelectProductTable,
  branchesList: getBranchesForList,
  eventsList: makeSelectEventsList,
  groupedEventsList: makeSelectGroupedEventsList,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      productsFindRequest,
      productRemoveRequest,
      productSaveRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
