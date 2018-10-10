export default [
  {
    path: '/',
    exact: true,
    component: import('../app/wrappers/home'),
    layout: import('../app/layouts/public'),
  },
];
