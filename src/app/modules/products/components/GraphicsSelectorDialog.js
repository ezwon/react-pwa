import React from "react";
import _ from "lodash";
import { Col } from "antd";
import {StyledGraphicsSelectorModal} from "../styles";

class GraphicsSelectorDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageUrl: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible && !this.props.visible) {
      this.setState({ selectedImageUrl: "" });
    }
  }

  handleSelectImage = url => {
    this.setState({ selectedImageUrl: url });
  };

  handleSubmit = () => {
    this.props.handleSelectImage(this.state.selectedImageUrl);
  };

  render() {
    const { handleCancel, visible, graphics } = this.props;
    const { selectedImageUrl } = this.state;

    return (
      <StyledGraphicsSelectorModal
        visible={visible}
        handleCancel={handleCancel}
        handleConfirm={this.handleSubmit}
        title="Select From Uploaded Images"
        width={700}
      >
        {graphics.length > 0 ? (
          _.map(graphics, url => {
            return (
              <Col style={{ padding: 20 }} span={6} key={url}>
                <img
                  src={url}
                  className={selectedImageUrl === url ? "selected" : ""}
                  onClick={this.handleSelectImage.bind(this, url)}
                />
              </Col>
            );
          })
        ) : (
          <h2>No Images Uploaded.</h2>
        )}
      </StyledGraphicsSelectorModal>
    );
  }
}
export default GraphicsSelectorDialog;
