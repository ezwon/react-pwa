export default [
  {
    path: '/shop',
    component: import('../app/wrappers/shop'),
    layout: import('../app/layouts/shop'),
    seo: {
      title: "iStack Network - Cart",
      description: "This is all of the description more than 200 characters",
      keywords: "some,awesome,keywords",
      image: "https://www.atyantik.com/wp-content/uploads/2016/10/Stress.jpg",
      site_name: "iStack Network",
      type: "website",
    },
    routes: [
      {
        path: "/shop/:section?",
        component: import('../app/wrappers/shop/section'),
      },
    ],
  },
];
