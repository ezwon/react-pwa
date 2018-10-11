import React, { PureComponent } from "react";
import { Row, Col, Badge, Icon, Switch, Modal } from "antd";
import { SubscriptionCardWrapper, AutoRenewal } from "../../../../styles";

import { Link } from 'react-router-dom';

const confirm = Modal.confirm;

class SubscriptionDetails extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  handleSwitch = () => {
    this.setState({ checked: !this.state.checked });

    confirm({
      title: "Confirm cancel of your Subscription?",
      content: "Text here explaining what will happen",
      onOk: ()=> {
        this.props.customerProductDeactivateSubscriptionRequest({
          data,
          onSuccess: () => {
            this.setState({isSaving: false}, () => {
              message.success("Subscription Canceled!");
            });
          },
          onError: result => this.props.onError(result)
        });
      },
      onCancel() {

      },
    });


  };

  render() {
    const { status, product, toggleSideMobileMenu } = this.props;

    const badgeProps = {
      status: status === "Non Renewing" ? "cancelled" : "active",
      text: status === "Non Renewing" ? "Cancelled" : product.status,
    };

    return (
      <Row>
        <SubscriptionCardWrapper>
          <Row type="flex">
            <Col xs={24} lg={6}>
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
            </Col>
            <Col xs={24} lg={18} className="details">
              <div className="membership">
                {/*<h1>{this.props.productName}</h1>*/}
                <h1>Funnel Flux</h1> {/* Static title only */}
                <Row gutter={32}>
                  <Col lg={12}>
                    <Badge {...badgeProps} />
                  </Col>
                  <Col lg={12} className="membership-date">
                    Member Since:
                    <span>{new Date(product.created_at).toLocaleDateString()}</span>
                  </Col>
                  <AutoRenewal className="mobile">
                    Auto Renewal is <span className={this.state.checked? "checked" : "" }>{this.state.checked? "Enabled" : "Disabled"}</span>
                    <div className="switch-wrapper">
                      <Switch onClick={this.handleSwitch} />
                    </div>
                  </AutoRenewal>
                </Row>
                <Row gutter={32} className="info">
                  <Col lg={12}>
                    <p>Every avid independent filmmaker has dreamed about making that special interest documentary,
                      or short film to show off their creative prowess. Many have great ideas and want to “wow” the film-festival scene,
                      or video renters with their big project. </p>
                  </Col>
                  <Col lg={12}>
                    <ul>
                      <li><Icon type="check" theme="outlined" style={{fontSize: "18px", fontWeight: "bold", color: "#6791FA", marginRight: "10px"}}/> Up to 5 M visitors a month*</li>
                      <li><Icon type="check" theme="outlined" style={{fontSize: "18px", fontWeight: "bold", color: "#6791FA", marginRight: "10px"}}/> Unlimited custom domains</li>
                      <li><Icon type="check" theme="outlined" style={{fontSize: "18px", fontWeight: "bold", color: "#6791FA", marginRight: "10px"}}/> Free SSL + on custom domains**</li>
                      <li><Icon type="check" theme="outlined" style={{fontSize: "18px", fontWeight: "bold", color: "#6791FA", marginRight: "10px"}}/> No overage charges</li>
                    </ul>
                    <AutoRenewal className="inline">
                      Auto Renewal is <span className={this.state.checked? "checked" : "" }>{this.state.checked? "Enabled" : "Disabled"}</span>
                      <div className="switch-wrapper">
                        <Switch onClick={this.handleSwitch} />
                      </div>
                    </AutoRenewal>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </SubscriptionCardWrapper>
      </Row>
    );
  }
}

export default SubscriptionDetails;
