import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {StyledQuotes} from "./styles";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <StyledQuotes>
        <div className="quote-text">
          "Stop managing your time. Start managing your focus."
          <span>– Robin Sharma</span>
        </div>
      </StyledQuotes>
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

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
