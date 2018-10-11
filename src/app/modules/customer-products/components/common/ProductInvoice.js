import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import moment from "moment";
import _ from "lodash";
import {Icon, Divider, message, Row, Col} from "antd";

import {Table} from "@modules/common/components";
import {StyledProductInvoice, ProductLogoMobile} from "../../styles";

import {shopAddToCart} from "@modules/shop/actions";
import {billingsInvoicesFindRequest} from "@modules/billings/actions";

import { Link } from 'react-router-dom';

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

class ProductInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
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

  componentDidMount() {
    this.props.billingsInvoicesFindRequest({
      client_product_id: this.props.product._id
    });
  }

  handleInvoicePageRequest = payload => {
    payload.client_product_id = this.props.product._id;
    this.props.billingsInvoicesFindRequest(payload);
  };

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
      this.props.shopAddToCart({cartItem: record});
      this.props.history.push("/cart");
    });
  };

  handleRowKey = record => {
    return record._id;
  };

  render() {
    const {billings, toggleSideMobileMenu} = this.props;
    const invoiceData = _.get(billings, "invoicesTable.data", []);
    return (
      <StyledProductInvoice>
        <Row type="flex">
          <Col xs={24}>
            <ProductLogoMobile>
              <div className="logo-wrapper">
                <Link
                  to="/account/products"

                  className="link-back"
                >
                  <Icon type="left" theme="outlined" style={{color: "#6592FA", fontSize: "16px"}} />
                </Link>
                <span className="product-side-menu-toggle">
                  <Icon onClick={()=>{toggleSideMobileMenu();}} type="setting" style={{ fontSize: 21, color: "#fff" }} />
                </span>
              </div>
            </ProductLogoMobile>
          </Col>
          <Col xs={24} className="details">
            <h1>View Product Invoice</h1>
            <div className="content-wrapper">
              <Table
                columns={this.columns}
                list={{data: invoiceData}}
                rowKey={this.handleRowKey}
                getList={this.handleInvoicePageRequest}
                expandedRowRender={record => <InvoiceProducts items={record.items}/>}
              />
            </div>
          </Col>
        </Row>
      </StyledProductInvoice>
    );
  }
}


function mapStateToProps(state) {
  const {billings} = state;
  return {
    billings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      shopAddToCart,
      billingsInvoicesFindRequest,
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductInvoice));
