import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Row, Col, Select} from "antd";

import {StyledWorldTime} from "./styles";

const Option = Select.Option;

const timezones =[
  {
    name: "Auckland",
    country: "New Zealand",
    time: "22:48",
    local: "Local time",
  },
  {
    name: "Manila",
    country: "Philippines",
    time: "18:48",
    local: "Today, 7hrs behind",
  }
]

class WorldTime extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledWorldTime>
        <Select placeholder="Select timezone" style={{width: "100%"}} size="large">
          <Option value="1">(UTC+08:00) Kuala Lumpur, Singapore</Option>
          <Option value="2">(UTC-12:00) International Date Line West</Option>
        </Select>
        <div className="timezones">
          {
            timezones.map((timezone, index) => (
              <div className="timezone" key={index}>
                <Row>
                  <Col xs={12}>
                    <h2>{timezone.name}</h2>
                    <p>{timezone.country}</p>
                  </Col>
                  <Col xs={12} className="side">
                    <h3>{timezone.time}</h3>
                    <p>{timezone.local}</p>
                  </Col>
                </Row>
              </div>
            ))
          }
        </div>
      </StyledWorldTime>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(WorldTime);
