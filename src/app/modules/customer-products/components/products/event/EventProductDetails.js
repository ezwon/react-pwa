import React, {Component} from "react";
import {Modal, Row, Col, Icon, message} from "antd";
import axios from "axios";
import _ from "lodash";

import moment from "moment";
import QuickLinks from "../../common/QuickLinks";
import {StyledEventProductDetails, ProductSideMenu, QuickLinksMobile, EventTicket} from "../../../styles";
import config from "@config";

import defaultSideGraphics from "@resources/images/ticket/ticket-side.png"; //change to default iStack Events Side Graphics
import defaultEventLogo from "@resources/images/logo/ecommerce.svg"; //change to default iStack Events Logo
import defaultSideGraphicsMobile from "@resources/images/ticket/ticket-side-mobile.svg";

import AssignTicketDialog from "./AssignTicketDialog";

import { Link } from 'react-router-dom';

class EventProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAssignTickets: false,
      generatingTicket: false,
      generatingInvoice: false,
    };
  }

  handleDownloadInvoice = () => {
    this.setState({generatingInvoice: true}, () => {
        axios.post(config.API_URL + "/pdf",
          {
            templateUrl: config.TEMPLATES[product.branch_id].INVOICE,
            templateData: {
              full_name: "Jayson Daquer",
              email: "jayson@istackmanila.com",
              line1: "Line1",
              line2: "Line2",
              line3: "Line3",
              line4: "Line4",
              invoice_number: "INV-0001",
              invoice_date: "2018-07-13",
              items: [{
                name: "Item 1",
                total_price: 999,
              }, {
                name: "Item 2",
                total_price: 999,
              }],
              amount_paid: 1998,
              currency_symbol: "$",
            }
          },
          {
            responseType: "arraybuffer"
          })
          .then((response) => {
            let url = URL.createObjectURL(new Blob([response.data], {
              type: "application/pdf"
            }));

            window.open(url, "_blank");
            this.setState({generatingInvoice: false});
          })
          .catch((error) => {
            message.error(error);
          });
      }
    );
  };

  handleDownloadTicket = () => {
    const {products} = this.props;
    let others = "";
    let templateData = {orders: []};

    _.map(products.data, (product) => {
      console.log("propduct", product);
      let productEvent = _.get(product, "product_details.custom_fields.info", {});
      others = JSON.parse(_.get(product, "product_details.custom_fields.others", "{}"));

      let productTickets = [];
      let productPurchaseDetails = {
        id: product.product_id,
        quantity: product.quantity,
        status: product.status,
        currency_symbol: product.currency_symbol,
        total_amount: product.total_amount,
        reference_id: product.reference_id,
      };

      _.map(product.client_product_custom_values, (ticket) => {
        ticket.custom_values["claimed"] = ticket.sys_gen_was_claimed ? "Claimed" : "Not Yet";
        productTickets.push(ticket.custom_values);
      });

      productEvent["date"] = moment(productEvent.event_date, "X").format("MMMM Do YYYY");
      productEvent["time"] = moment(productEvent.event_date, "X").format("hh:mm A");

      templateData.orders.push({
        event: productEvent,
        tickets: productTickets,
        purchase_details: productPurchaseDetails,
      });
    });

    console.log("tickets for Download!", templateData);


    this.setState({generatingTicket: true}, () => {
        axios.post(config.API_URL + "/pdf",
          {
            templateUrl: others["eventTicketTemplate"],
            templateData,
          },
          {
            responseType: "arraybuffer"
          })
          .then((response) => {
            let url = URL.createObjectURL(new Blob([response.data], {
              type: "application/pdf"
            }));

            window.open(url, "_blank");
            this.setState({generatingTicket: false});
          })
          .catch((error) => {
            message.error(error);
          });
      }
    );
  };

  handleToggleShowAssignTickets = () => {
    this.setState({showAssignTickets: !this.state.showAssignTickets});
  };

  handleProductSideMenu = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    const {generatingTicket, generatingInvoice, showAssignTickets} = this.state;
    const {products, productId, customerTicketDetailGetRequest} = this.props;
    const tickets = {};

    const eventDetails = _.get(products.data && products.data[0], "product_details.custom_fields.info", {
      event_date: "TBD",
      location: "TBD",
      address: "TBD",
      ticket_event_logo: defaultEventLogo,
      ticket_side_graphics: defaultSideGraphics,
    });

    _.map(products.data, (product) => {
      _.map(product.client_product_custom_values, (ticket) => {
        const details = ticket.custom_values;
        tickets[details.sys_gen_short_string] = Object.assign({}, ticket, details);
      });
    });


    return (
      <StyledEventProductDetails>
        <ProductSideMenu className={this.state.open ? "product-side-menu open" : "product-side-menu"}>
          <div className="side-menu-close">
            <Icon onClick={this.handleProductSideMenu} type="right-circle" style={{fontSize: 29, color: "#6592FA"}}/>
          </div>
          <QuickLinksMobile>
            <h3>Actions</h3>
            <ul>
              <li onClick={this.handleToggleShowAssignTickets}>
                <Icon type="edit"/> Edit Tickets
              </li>
              <li onClick={this.handleDownloadTicket}>
                <Icon type="download"/> Download Tickets
              </li>
            </ul>
          </QuickLinksMobile>
        </ProductSideMenu>
        <Row>
          <Col lg={16} md={24}>
            {_.map(tickets, ticket => {
              const details = ticket.custom_values;

              return (
                <EventTicket key={ticket._id}>
                  <div className="event-ticket-wrapper">
                    <Row type="flex" justify="center">
                      <Col className="ticket-logo-mobile"
                           style={{backgroundImage: `url(${defaultSideGraphicsMobile})`}}>
                        <Link
                          to="/account/products"

                          className="link-back"
                        >
                          <Icon type="left" theme="outlined" style={{color: "#6592FA", fontSize: "16px"}}/>
                        </Link>
                        <span className="product-side-menu-toggle">
                          <Icon onClick={this.handleProductSideMenu} type="setting"
                                style={{fontSize: 21, color: "#fff"}}/>
                        </span>
                      </Col>
                      <Col lg={12} xs={24} className="heading">
                        <img src={eventDetails.ticket_event_logo}/>

                        {eventDetails.event_date !== "TBD" ?
                          <h2>{moment(eventDetails.event_date, "X").format("MMMM Do YYYY")}</h2> : eventDetails.event_date}
                        {eventDetails.event_date !== "TBD" ? <p>Doors open
                          at {moment(eventDetails.event_date, "X").format("hh:mm A")}</p> : eventDetails.event_date}

                        <h2>{eventDetails.location}</h2>
                        <p>{eventDetails.address}</p>
                        <p className="desc">{eventDetails.description}</p>
                      </Col>
                      <Col lg={8} md={16} xs={24} className="details">
                        <h3>Ticket Name</h3>
                        <p>{eventDetails.short_title}</p>
                        <h3>Issued to</h3>
                        <p>{`${details.first_name} ${details.last_name}`}</p>
                        <h3>Ticket ID</h3>
                        <p>{details.sys_gen_short_string}</p>
                        <h3>Order Reference</h3>
                        <p>{details.sys_gen_reference_id}</p>
                        <h3>Email</h3>
                        <p>{details.email}</p>
                        {/*<p>{details.sys_gen_was_claimed ? "Yes" : "Not Yet"}</p>*/}
                        <span className="claimed">Claimed</span>
                      </Col>
                      <Col
                        lg={4}
                        md={8}
                        xs={12}
                        className="ticket-logo"
                        style={{backgroundImage: `url(${eventDetails.ticket_side_graphics})`}}
                      />
                    </Row>
                  </div>
                  {/*<Row>
                    <Col>
                      <EventAbout>
                        <h1>Details</h1>
                        <p>{eventDetails.description}</p>
                      </EventAbout>
                    </Col>
                  </Row>*/}
                </EventTicket>
              );
            })}
          </Col>
          <Col lg={{span: 7, offset: 1}} md={24}>
            <QuickLinks>
              <ul>
                <li onClick={this.handleToggleShowAssignTickets}>
                  <Icon type="edit"/> Edit Tickets
                </li>
                <li onClick={this.handleDownloadTicket}>
                  <Icon type="download"/> Download Tickets
                </li>
              </ul>
            </QuickLinks>
          </Col>
          <Modal
            onCancel={this.handleToggleShowAssignTickets}
            footer={null}
            visible={showAssignTickets}
            bodyStyle={{padding: "50"}}
            style={{top: 200}}
            width={700}
          >
            <AssignTicketDialog
              closeDialog={() => {
                this.handleToggleShowAssignTickets();
                customerTicketDetailGetRequest({product_id: productId});
              }}
              tickets={tickets}
              show={showAssignTickets}
            />
          </Modal>
        </Row>
      </StyledEventProductDetails>
    );
  }
}

export default EventProductDetails;
