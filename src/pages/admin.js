const routes = [
  {
    path: "/admin",
    component: import('../app/wrappers/admin'),
    layout: import('../app/layouts/admin'),
    seo: {
      title: "iStack Network",
      description: "This is all of the description more than 200 characters",
      keywords: "some,awesome,keywords",
      image: "https://www.atyantik.com/wp-content/uploads/2016/10/Stress.jpg",
      site_name: "React PWA",
      type: "website",
    },
    routes: [
      {
        path: "/admin/:section?/:subsection?/:_id?",
        component:  import('../app/wrappers/admin/section'),
      },
    ],
  },
];

export default routes;
