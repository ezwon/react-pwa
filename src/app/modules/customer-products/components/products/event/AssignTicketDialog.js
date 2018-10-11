import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import _ from "lodash";
import {Form, Button, Row, Col, message} from "antd";
import {
  TextInput,
} from "@ant-components/FormElements";

import {customerProductUpdateCustomValuesRequest} from "../../../actions";

import {AssignTickets} from "../../../styles";

class AssignTicketDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: {},
      errors: {},
      tempTickets: this.props.tickets,
    };
  }

  handleChange = (id, key, e) => {
    const tempTickets = this.state.tempTickets;
    tempTickets[id][key] = e.target.value;
    this.setState({tempTickets: tempTickets});
  };

  handleSubmit = () => {
    const {tempTickets} = this.state;
    let updatedTickets = tempTickets;
    let ticketCount = Object.keys(tempTickets).length;
    let updatedTicket = 1;

    this.setState({loading:true});

    this.props.form.validateFields((err) => {
      if (!err) {
        _.map(tempTickets, (ticket) => {
          setTimeout(() => {
            const data = {
              id: ticket._id,
              custom_values: {
                email: ticket.email,
                first_name: ticket.first_name,
                last_name: ticket.last_name,
                sys_gen_reference_id: ticket.sys_gen_reference_id,
                sys_gen_short_string: ticket.sys_gen_short_string,
                sys_gen_was_claimed: ticket.sys_gen_was_claimed,
              },
              number: ticket.number,
              updated_at: ticket.updated_at,
            };

            this.props.customerProductUpdateCustomValuesRequest({
              data,
              onSuccess: (result) => {
                console.log("Success - " + ticket.sys_gen_short_string,result);
                updatedTicket += 1;
                updatedTickets[ticket.sys_gen_short_string].custom_values = result.custom_values;
                updatedTickets[ticket.sys_gen_short_string].updated_at = result.updated_at;

                if (updatedTicket > ticketCount) {
                  message.success("Tickets Updated!", 1, () => {
                    this.setState({
                      tempTickets: updatedTickets,
                      loading:false,
                    });
                  });
                }
              }
            });
          }, updatedTicket * 1000);
        });
      } else {
        message.error(err);
      }
    });
  };

  render() {
    const {form, closeDialog} = this.props;
    const {errors, loading, tempTickets} = this.state;

    return (
      <AssignTickets>
        <h2>Assign Tickets</h2>
        <Form layout="vertical">
          {_.map(tempTickets, ticket => {
            return (
              <Row gutter={16} key={ticket._id}>
                <h4>Ticket: {ticket.sys_gen_short_string} - {ticket.sys_gen_reference_id}</h4>
                <Col span={7}>
                  <TextInput
                    form={form}
                    label={"Email"}
                    placeholder="Email"
                    name={`${ticket.sys_gen_short_string}-email`}
                    isEmail={true}
                    onChange={e => this.handleChange(ticket.sys_gen_short_string, "email", e)}
                    error={errors[`${ticket.sys_gen_short_string}-email`]}
                    required={true}
                    initialValue={ticket.email}
                  />
                </Col>
                <Col span={7}>
                  <TextInput
                    form={form}
                    label={"First Name"}
                    placeholder="First Name"
                    name={`${ticket.sys_gen_short_string}-first_name`}
                    onChange={e => this.handleChange(ticket.sys_gen_short_string, "first_name", e)}
                    error={errors[`${ticket.sys_gen_short_string}-first_name`]}
                    required={true}
                    initialValue={ticket.first_name}
                  />
                </Col>
                <Col span={7}>
                  <TextInput
                    form={form}
                    label={"Last Name"}
                    placeholder="Last Name"
                    name={`${ticket.sys_gen_short_string}-last_name`}
                    onChange={e => this.handleChange(ticket.sys_gen_short_string, "last_name", e)}
                    error={errors[`${ticket.sys_gen_short_string}-last_name`]}
                    required={true}
                    initialValue={ticket.last_name}
                  />
                </Col>
              </Row>
            );
          })}
          <Row>
            <Col>
              <Button loading={loading} onClick={this.handleSubmit}>{loading ? "Updating" : "Update"}</Button>
              <Button onClick={closeDialog}>Close</Button>
            </Col>
          </Row>
        </Form>
      </AssignTickets>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      customerProductUpdateCustomValuesRequest,
    },
    dispatch,
  );
}

export default Form.create()(connect(null, mapDispatchToProps)(AssignTicketDialog));

