import moment from "moment";

export const productTableColumns = {
  info: [
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity Sold",
      dataIndex: "quantity_sold",
    },
    {
      title: "Payment Type",
      dataIndex: "payment_cycle",
    },
    {
      title: "Date Updated",
      dataIndex: "updated_at",
      render: (value) => moment(new Date(value)).format("MMM-DD-YYYY"),
    },
    // {
    //   title: "Updated By",
    //   dataIndex: "updated_by",
    //   render: value => {
    //     return value ? value.replace("+", "_") : "";
    //   },
    // },
  ],
  AC: [
    {
      title: "Add Tag",
      dataIndex: "ac_details.add_tag",
    },
    {
      title: "Purchase Tag",
      dataIndex: "ac_details.purchase_tag",
    },
  ],
  FB: [
    {
      title: "ID",
      dataIndex: "fb_details.id",
    },
    {
      title: "Name",
      dataIndex: "fb_details.name",
    },
    {
      title: "Category",
      dataIndex: "fb_details.category",
    },
  ],
  GA: [
    {
      title: "ID",
      dataIndex: "ga_details.id",
    },
    {
      title: "Name",
      dataIndex: "ga_details.name",
    },
    {
      title: "Category",
      dataIndex: "ga_details.category",
    },
    {
      title: "Brand",
      dataIndex: "ga_details.brand",
    },
    {
      title: "Page Long Name",
      dataIndex: "ga_details.page_long_name",
    },
    {
      title: "Page Type",
      dataIndex: "ga_details.page_type",
    },
    {
      title: "Page version",
      dataIndex: "ga_details.page_version",
    },
    {
      title: "Variant",
      dataIndex: "ga_details.variants",
    },
  ],
  plan: [
    {
      title: "Billing Cycles",
      dataIndex: "plan.billing_cycles",
    },
    {
      title: "Interval",
      dataIndex: "plan.interval",
    },
    {
      title: "Interval Unit",
      dataIndex: "plan.interval_unit",
    },
  ],
};

export const productTableCategories = [
  {
    value: "info",
    label: "Product Information",
  },
  {
    value: "plan",
    label: "Plan Details",
  },
];

export const payment_cycles = {
  "One Time": {id: "One Time", label: "One Time"},
  Limited: {id: "Limited", label: "Limited"},
  Subscription: {id: "Subscription", label: "Subscription"},
};
export const interval_units = {
  weeks: {id: "weeks", label: "Weeks"},
  months: {id: "months", label: "Months"},
  years: {id: "years", label: "Years"},
};
export const productTypes = [
  {
    label: "Event",
    value: "Event",
  },
  {
    label: "Course",
    value: "Course",
  },
  {
    label: "Subscription",
    value: "Subscription",
  },
];

export const PRODUCTS_GET_REQUEST = "PRODUCTS_GET_REQUEST";
export const PRODUCTS_GET_DONE = "PRODUCTS_GET_DONE";
export const PRODUCTS_FIND_REQUEST = "PRODUCTS_FIND_REQUEST";
export const PRODUCTS_FIND_DONE = "PRODUCTS_FIND_DONE";
export const PRODUCTS_LIST_REQUEST = "PRODUCTS_LIST_REQUEST";
export const PRODUCTS_LIST_DONE = "PRODUCTS_LIST_DONE";
export const PRODUCT_SAVE_REQUEST = "PRODUCT_SAVE_REQUEST";
export const PRODUCT_REMOVE_REQUEST = "PRODUCT_REMOVE_REQUEST";
export const PRODUCT_SAVE_CUSTOM_FIELDS_REQUEST = "PRODUCT_SAVE_CUSTOM_FIELDS_REQUEST";

export const PRODUCT_TYPES = {
  Event: "Event",
  Course: "Course", // thinkific
  Subscription: "Subscription",
  BundledCourses: "Bundled Courses", // thinkific
  BundledProducts: "Bundled Products",
  LiveStream: "Live Stream",
};
