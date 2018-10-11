import React, {Component} from "react";
import _ from "lodash";
import {Button,Row, Col, Form, Select} from "antd";

import {
  NumberInput,
} from "@ant-components/FormElements";


import {StyledCustomerCreateInvoice} from "../styles";

const Option = Select.Option;

class CustomerCreateInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
      isSaving: false,
      availableProducts: {},
      selectedProducts: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = Object.assign({}, this.state.data, values);
        // TODO check if this is ok, passing onSuccess process
        console.log(data);
      }
    });
  };

  componentDidMount() {
    this.props.productsFindRequest({
      // name : `/${value}/`,
      onSuccess: (result) => {
        console.log("products", result.data);

        const availableProducts = {};
        _.map(result.data, product => {
          availableProducts[product._id] = product;
        });

        this.setState({availableProducts});
      }
    });
  };

  handleChangeQuantity = (key, val) => {
    let data = this.state.data;
    data[`${key}-quantity`] = val;
  };

  handleProductSelectChange = (value) => {
    console.log(value);
    this.setState({selectedProducts: value});
  };

  handleGenerateInvoice = () =>{
    const data = {
      branch_id: "",
      payment_type: "zoho",
      zoho:{

      },
      metadata: {},
      product: {},
    };
  };

  render() {
    const {form, productSearchResult} = this.props;
    const {errors, data, isSaving, selectedProducts, availableProducts} = this.state;

    const productItems = [];

    _.map(productSearchResult, product => {
      productItems.push(<Option key={product._id}>{product.name}</Option>);
    });

    return (
      <StyledCustomerCreateInvoice>
        <Row>
          <Col span={8}>
            <Select
              mode="multiple"
              style={{width: "100%"}}
              onChange={this.handleProductSelectChange}
              tokenSeparators={[","]}
            >
              {productItems}
            </Select>
          </Col>
          <Col offset={1} span={15}>
            <Form layout="vertical">
              {selectedProducts.length > 0 &&
              _.map(availableProducts, product => {
                if (selectedProducts.indexOf(product._id) > -1) {
                  console.log("product:",product);

                  return (
                    <div key={product._id}>
                      <label>{`${product.name} - ${product.currency_symbol} ${product.price}`}</label>
                      <NumberInput
                        className="item-quantity"
                        form={form}
                        label={""}
                        name={`${product._id}-quantity`}
                        required={true}
                        onChange={e => this.handleChangeQuantity(product._id, e)}
                        error={errors[`${product._id}-quantity`]}
                        precision={0}
                        hasFormatter={false}
                        initialValue={data[`${product._id}-quantity`] || 1}
                        min={1}
                        max={10}
                      />

                      <label>{`= ${product.currency_symbol} ${(data[`${product._id}-quantity`] || 1)  * product.price}`}</label>
                    </div>
                  );
                }
              })}
              <Button type="primary" icon="save" loading={isSaving} onClick={this.handleSubmit}>
                Generate Invoice
              </Button>
            </Form>

          </Col>
        </Row>

      </StyledCustomerCreateInvoice>
    );
  }
}

export default Form.create()(CustomerCreateInvoice);
