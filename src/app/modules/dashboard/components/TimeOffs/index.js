import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {StyledTimeOffs} from "./styles";

class TimeOffs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <StyledTimeOffs>
        <h3>Time Offs</h3>
      </StyledTimeOffs>
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeOffs);
