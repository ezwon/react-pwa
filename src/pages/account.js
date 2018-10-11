const routes = [
  {
    path: "/account",
    component: import('../app/wrappers/account'),
    layout: import('../app/layouts/account'),
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
        path: "/account/:section?/:subsection?/:_id?",
        component: import('../app/wrappers/account/section'),
      },
    ],
  },
];

export default routes;
