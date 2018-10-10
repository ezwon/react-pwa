import React, {Component} from "react";
import PropTypes from "prop-types";
import {StyledJoditEditor} from "./styles";

import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";


class Editor extends Component {
  constructor(props) {
    super(props);
  }

  jodit;
  setRef = jodit => this.jodit = jodit;

  config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };

  // <div dangerouslySetInnerHTML={{__html:this.state.content}} />

  render() {
    return (
      <StyledJoditEditor>
        <JoditEditor
          editorRef={this.setRef}
          value={this.props.content}
          config={this.config}
          onChange={this.props.handleUpdateContent}
        />
      </StyledJoditEditor>
    );
  }
}


Editor.propTypes = {
  handleUpdateContent: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default Editor;
