import React, { Component } from "react";
import { QuickLinksCard } from "../../styles";
class QuickLinks extends Component {
  render() {
    return (
      <QuickLinksCard>
        <h1>Actions</h1>
        <div>{this.props.children}</div>
      </QuickLinksCard>
    );
  }
}

export default QuickLinks;
