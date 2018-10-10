import React, {Component} from "react";

class PublicLayout extends Component {
  render() {
    return (
      <main
        style={{
          maxHeight: "100vh",
          overflowX: "scroll"
        }}
        className="container public-layout">
        {this.props.children}
      </main>
    );
  }
}

export default PublicLayout;

