import React, {Component} from "react";
import { Form, Collapse } from "antd";
import { TextInput, SaveButton } from "@ant-components/FormElements/index";
const Panel = Collapse.Panel;

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},

    };
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.props.data._id !== nextProps.data._id) {
      this.props.form.resetFields();

      // console.log('changed to: ', nextProps.data.last_name);
      this.setState({ data: Object.assign({}, nextProps.data) });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = Object.assign({}, this.state.data, values);
        // TODO check if this is ok, passing onSuccess process
        this.props.saveRequest({id: data._id, data, onSuccess: this.props.onSuccess});
      }
    });
  };
  handleChange = (e) => {
    const field = e.target.id;
    const data = Object.assign({}, this.state.data);
    data[field] = e.target.value;
    this.setState({ data });
  };

  render() {
    const { form, isLoading, isSaving } = this.props;
    const { isFieldsTouched } = form;
    const { errors, data } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} layout="vertical">
        <Collapse activeKey={["1"]}>
          <Panel showArrow={false} header="Customer Details" key="1">
            <TextInput
              form={form}
              label={"First Name"}
              name={"first_name"}
              required={true}
              initialValue={data.first_name}
              onChange={this.handleChange}
              error={errors.first_name}
            />

            <TextInput
              form={form}
              label={"Last Name"}
              name={"last_name"}
              required={true}
              initialValue={data.last_name}
              onChange={this.handleChange}
              error={errors.last_name}
            />

          </Panel>
        </Collapse>

        <SaveButton saving={isSaving} disabled={!isFieldsTouched() || isLoading}/>

      </Form>
    );
  }

}

const CustomerForm = Form.create()(EntryForm);
export default CustomerForm;
