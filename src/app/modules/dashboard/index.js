import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {Announcements, Guides, Calendar} from "@modules/dashboard/components";

import {Collapse} from "antd";
import { StyledDashboardWrapper } from "./styles";
const Panel = Collapse.Panel;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "content",
    };
  }

  updateContent = (value) => {
    this.setState({content: value});
  };

  componentDidMount() {

  }

  render() {
    return (
      <StyledDashboardWrapper>
        <div className="show-select">
          <h2>Dashboard</h2>
          <Collapse bordered={false} defaultActiveKey={["1", "2", "3"]}>
            <Panel showArrow={false} header="Announcement and Time-Offs" key="1">
              <Announcements />
            </Panel>
            <Panel showArrow={false} header="Guides" key="2" className="guides">
              <Guides />
            </Panel>
            <Panel showArrow={false} header="Calendar" key="3">
              <Calendar />
            </Panel>

          </Collapse>
        </div>
      </StyledDashboardWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
