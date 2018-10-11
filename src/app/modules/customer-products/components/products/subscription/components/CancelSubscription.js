import React, {Component} from "react";
import _ from "lodash";
import {Row, Col, Radio, Button, Form, message, Modal, Icon} from "antd";
import {
  TextInput,
} from "@ant-components/FormElements";
import {StyledCancelSubscription, ProductLogoMobile} from "../../../../styles";
import {StyledConfirm} from "@common/styles/modal";

import { Link } from 'react-router-dom';

const RadioGroup = Radio.Group;
const confirm = Modal.confirm;

const CUSTOM_REASON_ID = 30;

class CancelSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reasonId: 0,
      reason: "",
    };
  }


  handleCancelSubscription = () => {
    this.props.form.validateFields((err) => {
      if (!err) {
        this.setState({isSaving: true});

        const data = {
          id: this.props.product._id,
          reason: this.state.reason,
          reason_id: this.state.reasonId
        };

        console.log("Cancel Subscription:", data);

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


      } else {
        message.error(err);
      }
    });
  };

  handleSelectReason = (e) => {
    this.setState({
      reasonId: e.target.value,
    });
  };

  handleChangeReason = (e) => {
    this.setState({reason: e.target.value});
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ visible: false });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }



  render() {
    const {form, churnMessages, toggleSideMobileMenu} = this.props;

    const { visible } = this.state;

    let cancelReasons = _.map(churnMessages, (item) => {
      return {
        label: item.label,
        value: item.churn_message_id
      };
    });

    cancelReasons.push({value: CUSTOM_REASON_ID, label: "Other Reason"});

    return (
      <StyledCancelSubscription>
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
            <h1>Cancel Subscription</h1>
            <div className="content-wrapper">
            <Form>
              <Row>
                <Col>
                  <h3>Reason</h3>
                  <RadioGroup onChange={this.handleSelectReason} value={this.state.reasonId}>
                    {
                      cancelReasons.map((reason, i) => {
                        return <Radio key={i} value={reason.value} data-id={reason.value}>{reason.label}</Radio>;
                      })
                    }
                  </RadioGroup>
                </Col>
                <Col style={{display: this.state.reasonId === CUSTOM_REASON_ID ? "block" : "none"}}>
                  {
                    this.state.reasonId === CUSTOM_REASON_ID && (
                      <TextInput
                        form={form}
                        label="Other Reason"
                        name="reason"
                        required={true}
                        onChange={e => this.handleChangeReason(e)}
                        rows={3}
                        min={0}
                        max={500}
                        initialValue=""
                      />)
                  }
                </Col>
                <Col>
                  <p className="note">Service can till be used until the end of current term and the subscription will be canceled on SUBSCRIPTION_END_PERIOD</p>
                </Col>
              </Row>
              <Row className="action">
                <Col>
                  <Button type="primary" onClick={this.handleCancelSubscription}>Cancel Subscription</Button>
                </Col>
              </Row>
            </Form>
          </div>
          </Col>
        </Row>
        <StyledConfirm
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              OK
            </Button>,
          ]}
        >
          <Icon type="exclamation-circle" style={{fontSize: "45px", color: "#6592FA"}} />
          <h2>Confirm cancel of your Subscription?</h2>
          <p>Text here explaining what will happen</p>
        </StyledConfirm>
      </StyledCancelSubscription>
    );
  }
}


export default Form.create({})(CancelSubscription);
