import React, {Component} from "react";
import {Row, Col} from "antd";
import _ from "lodash";

import {PRODUCT_TYPES} from "../constants";

import EventProductCard from "./products/event/EventProductCard";
import CourseProductCard from "./products/course/CourseProductCard";
import BundledProductsProductCard from "./products/bundled-products/BundledProductsProductCard";
import BundledCoursesProductCard from "./products/bundled-courses/BundledCoursesProductCard";
import SubscriptionProductCard from "./products/subscription/SubscriptionProductCard";
import LiveStreamProductCard from "./products/live-stream/LiveStreamProductCard";

class CustomerProductsList extends Component {
  render() {
    const {products} = this.props;
    const eventsProducts = _.filter(products, ["product_details.type", PRODUCT_TYPES.Event]);
    const nonEventProducts = _.filter(products, item => item.product_details.type !== PRODUCT_TYPES.Event);
    const groupedEventProducts = _.groupBy(eventsProducts, "product_details._id");

    return (
      <Row gutter={30}>
        {_.map(nonEventProducts, (product,i) => {
          return (
            <Col key={i} sm={24} md={12} lg={8}>
              {
                {
                  [PRODUCT_TYPES.Course]: <CourseProductCard product={product}/>,
                  [PRODUCT_TYPES.BundledCourses]: <BundledCoursesProductCard product={product}/>,
                  [PRODUCT_TYPES.BundledProducts]: <BundledProductsProductCard product={product}/>,
                  [PRODUCT_TYPES.Subscription]: <SubscriptionProductCard product={product}/>,
                  [PRODUCT_TYPES.LiveStream]: <LiveStreamProductCard product={product}/>,
                }[product.product_details && product.product_details.type]
              }
            </Col>
          );
        })}

        {_.map(groupedEventProducts, (product,i) => {
          return (
            <Col key={i} sm={24} md={12} lg={8}>
              <EventProductCard product={product[0]}/>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default CustomerProductsList;
