import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {StyledFocusToday} from "./styles";

class FocusToday extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <StyledFocusToday>
        <h3>Focus Today</h3>
      </StyledFocusToday>
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

export default connect(mapStateToProps, mapDispatchToProps)(FocusToday);
