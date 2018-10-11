import React, {Component} from "react";
import {Upload, Button, Icon, Row, Col, message} from "antd";
import config from "@config";
import _ from "lodash";

class ProductGraphics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
      graphicsArray: [],
      graphicsFileList: [],
    };
  }

  handleImageChange = info => {
    let fileList = info.fileList;
    // Limit the number of uploaded files to 1
    fileList = fileList
      .slice(-1)
      .map(file => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      })
      .filter(file => {
        if (file.response) {
          return file.response.status === "success";
        }
        return true;
      });

    this.setState({graphicsFileList: fileList});
  };

  handleImageUploadSuccess = data => {
    this.setState({graphicsArray: [...this.state.graphicsArray, data.fileUrl]});
  };

  handleRemoveImage = url => {
    console.log(url);
    const {graphicsArray} = this.state;
    const newList = _.remove(graphicsArray, item => {
      return item !== url;
    });
    this.setState({graphicsArray: newList});
  };

  handleSave = () => {
    const {graphicsArray} = this.state;
    const {product} = this.props;
    const combinedGraphicsArray = product.custom_fields.graphics && [...product.custom_fields.graphics, ...graphicsArray] || graphicsArray;

    if (product.custom_fields.graphics) {
      product.custom_fields.graphics = combinedGraphicsArray;
    } else {
      product.custom_fields = {
        ...product.custom_fields,
        graphics: graphicsArray,
      };
    }

    this.setState({isSaving:true});

    this.props.productSaveCustomFields({
      data: {
        product_id: product._id,
        fields: product.custom_fields,
      },
      onSuccess: () => {
        this.setState({isSaving:false}, ()=>{
          message.success("Graphics updated!");
        });
      },
    });
  };

  render() {
    const {graphicsFileList, graphicsArray, isSaving} = this.state;
    const {product} = this.props;
    const combinedGraphicsArray = product.custom_fields.graphics && [...product.custom_fields.graphics, ...graphicsArray] || graphicsArray;
    return (
      <div>
        <Upload name="picture" action={`${config.API_URL}/generic-uploads`} accept="image/*" listType="picture"
                onRemove={false}
                onChange={this.handleImageChange}
                onSuccess={this.handleImageUploadSuccess}
                showUploadList={true}
                fileList={graphicsFileList}
                headers={{
                  authorization: `Bearer ${localStorage.getItem("access_token")}`,
                }}>
          <Button>
            <Icon type="upload"/> Click to upload
          </Button>
        </Upload>
        <Row>
          <h4>List of Uploaded Images</h4>
          {_.map(combinedGraphicsArray, url => {
            return (
              <Col style={{padding: 20}} span={6} key={url}>
                <Icon type="delete" onClick={this.handleRemoveImage.bind(this, url)}/>
                <img src={url} width="100%"/>
              </Col>
            );
          })}
        </Row>
        <Button type="primary"  icon="save" loading={isSaving} onClick={this.handleSave} disabled={!graphicsArray.length}>
          Save Graphics
        </Button>
      </div>
    );
  }
}

export default ProductGraphics;
