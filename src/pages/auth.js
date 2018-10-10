export default [
  {
    path: '/auth',
    exact: true,
    component: import('../app/wrappers/auth'),
    layout: import('../app/layouts/public'),
  },
];
