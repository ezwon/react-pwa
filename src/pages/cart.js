export default [
  {
    path: '/cart',
    exact: true,
    component: import('../app/wrappers/cart'),
    layout: import('../app/layouts/public'),
    seo: {
      title: "iStack Network - Cart",
      description: "This is all of the description more than 200 characters",
      keywords: "some,awesome,keywords",
      image: "https://www.atyantik.com/wp-content/uploads/2016/10/Stress.jpg",
      site_name: "iStack Network",
      type: "website",
    },
  },
];
