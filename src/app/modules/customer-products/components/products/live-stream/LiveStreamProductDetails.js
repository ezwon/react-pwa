import React, {Component} from "react";
import {Row, Col, Icon } from "antd";
import QuickLinks from "../../common/QuickLinks";
import {CourseCard} from "../../../styles";


class LiveStreamProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col lg={15} md={24}>
          <CourseCard>
            <Row>
              <Col xxl={6} xl={24} className="logo">
                <div className="logo-bg">
                  <img src={""}/>
                </div>
              </Col>
              <Col xxl={{span: 17, offset: 1}} xl={24} className="details">
                <h1>Live Stream Wrapper</h1>
                <p>
                  Live Stream Details here
                </p>
              </Col>
            </Row>
          </CourseCard>
        </Col>
        <Col lg={{span: 8, offset: 1}} md={24}>
          <QuickLinks>
            <ul>
              <li>
                <Icon type="file-text"/> View Invoice
              </li>
            </ul>
          </QuickLinks>
        </Col>
      </Row>
    );
  }
}

export default LiveStreamProductDetails;
