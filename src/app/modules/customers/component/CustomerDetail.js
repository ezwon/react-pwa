import React, {Component} from "react";
import {createStructuredSelector} from "reselect";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Spin} from "antd";

import {} from "../actions";
import {CustomerDetailsWrapper} from "../styles";
import {AppWrapper} from "@ant-components";

class CustomerDetail extends Component {
  componentWillMount() {
    const {customerId} = this.props;
    console.log("customerId",customerId);
    // this.props.customerProductDetailGetRequest({id: productId});
  }

  render() {
    const {isLoading} = this.props;
    return (
      <AppWrapper>
        <CustomerDetailsWrapper>
          <Spin spinning={isLoading}>
            <div>
              DETAILS
            </div>
          </Spin>
        </CustomerDetailsWrapper>
      </AppWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetail);
