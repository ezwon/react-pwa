import React from "react";
import HomeRoutes from './pages/home';
import AuthRoutes from './pages/auth';
import CartRoutes from './pages/cart';
import ShopRoutes from './pages/shop';
import AdminRoutes from './pages/admin';
import AccountRoutes from './pages/account';

import Error404 from "@common/error/404";

import AppLogo from '@resources/images/logo/iStackNetworkLogo.png';

const appRoutes = [
  ...HomeRoutes,
  ...AuthRoutes,
  ...CartRoutes,
  ...ShopRoutes,
  ...AdminRoutes,
  ...AccountRoutes,
];

export default class Routes {
  // eslint-disable-next-line
  apply(router) {
    router.setPwaSchema(  {
      name: 'iStack Network',
      short_name: 'iStackNetwork',

      // Possible values ltr(left to right)/rtl(right to left)
      dir: 'ltr',

      // language: Default en-US
      lang: 'en-US',
    });

    router.setDefaultSeoSchema({
      title: 'iStack Network',
      site_name: 'iStack Network',
      description: "Billing, Invoices and Access all in one place",
      image: AppLogo,
      twitter: {
        site: '@istack-network',
        creator: '@istack-network',
      },
      facebook: {
        admins: [],
      },
      meta: [
        {
          name: 'theme-color',
          content: '#f6f6f6',
        },
      ],
    });

    // Adding application routes to application routes
    router.hooks.initRoutes.tap('AddAppRoutes', () => {
      router.set404Component(Error404);
      router.addRoutes(appRoutes);
    });
  }
}
