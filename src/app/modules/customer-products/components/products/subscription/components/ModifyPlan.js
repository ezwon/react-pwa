import React, {Component} from "react";
import _ from "lodash";
import {Button, Modal, Row, Col, Icon} from "antd";
import {StyledModifyPlan, ProductLogoMobile} from "../../../../styles";

import { Link } from 'react-router-dom';

const confirm = Modal.confirm;

class ModifyPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selectedPlan: this.props.product.product_details._id,
      availablePlans: [],
    };
  }

  componentDidMount() {
    const productDetails = this.props.product.product_details;
    this.props.shopProductsFindRequest({
      branch_id: productDetails.branch_id,
      event_id: productDetails.event_id,
      onSuccess: (result) => {

        const availablePlans = {};

        _.map(result, (plan) => {
          plan.current = plan._id === productDetails._id;
          availablePlans[plan._id] = plan;
        });

        this.setState({
          loading: false,
          availablePlans,
        });
      },
    });
  }

  handleSelectPlan = (plan) => {
    console.log(plan);
    this.setState({selectedPlan: plan});
  };

  handleApplyChanges = () => {
    const {selectedPlan} = this.state;
    confirm({
      title: "Confirm plan changes?",
      content: "Text here explaining what will happen - " + selectedPlan,
      onOk: () => {

      },
      onCancel() {

      },
    });
  };

  render() {
    const {product, toggleSideMobileMenu} = this.props;
    const {availablePlans, selectedPlan} = this.state;
    const defaultImage ="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
    const productImage = product.product_details && product.product_details.custom && product.product_details.custom.thumbnail || defaultImage;

    console.log("currentProduct", product);
    console.log("availablePlans", availablePlans);

    return (
      <StyledModifyPlan>
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
            <h1>Modify Plan</h1>
            <p>Info</p>
            <div className="content-wrapper">
              <Row>
                {
                  _.map(availablePlans, (plan, i) => {
                    if (plan.custom_fields.info) {
                      const details = plan.custom_fields.info;
                      const cssClass = plan._id === selectedPlan ? "plan-box selected" : "plan-box";
                      return (
                        <Col xs={24} xl={12} xxl={8}>
                          <div className={cssClass} key={i}>
                            <div className="product-image" style={{ backgroundImage: `url(${productImage})`}}/>
                            <div className="box-content">
                              <h3>{details.short_title}</h3>
                              <h4>{plan.price}</h4>
                              <p>People like a "special" price or exclusive offer directed only to them. Most Industrial and Manufacturing equipment buyers are seeking to be told that they are special.</p>
                              <div>
                                <Button type="outline" onClick={() => {
                                  this.handleSelectPlan(plan._id);
                                }}>
                                  Select Plan
                                </Button>
                              </div>
                            </div>
                            <span className="current"><Icon type="check-circle" theme="outlined" style={{fontSize: "18px", color: "#fff"}} /></span>
                          </div>
                        </Col>
                      );
                    }
                  })
                }
              </Row>
              <Row className="action">
                <Col span={24}>
                  <Button type="primary" onClick={this.handleApplyChanges}>Accept Changes</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </StyledModifyPlan>
    );
  }
}

export default ModifyPlan;
