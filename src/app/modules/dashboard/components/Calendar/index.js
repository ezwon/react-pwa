import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {StyledCalendar} from "./styles";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <StyledCalendar>
        <h3>Calendar</h3>
      </StyledCalendar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
