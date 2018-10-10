export default {
  NODE_ENV: "development",
  SANDBOX: true,
  PORT: 3000,
  PAYPAL_ENV: "sandbox",
  STRIPE_PUBLIC_KEY: "pk_test_QXR6McjAkbUOawCA73ux1st3",
  AUTH0_CLIENT_ID: "loLha8YLTt0ImK1VvbZdO0cP5qojIdIx",
  AUTH0_DOMAIN: "dev-istack.auth0.com",
  AUTH0_AUDIENCE: "https://dev-api.istack.network/",
  AUTH0_CALLBACK: "http://localhost:3000/auth",
  AUTH0_NAMESPACE: "https://istacktraining.com/",
  AUTH0_ACCOUNTS: "istack_accounts",
  AUTH0_REDIRECT_CART: "http://localhost:3000/cart",
  AUTH0_REDIRECT_SHOP: "http://localhost:3000/shop",
  API_URL: "https://dev-api.istack.network",
  AUTH0_DATABASE: "iStack-Network-Staging",
  APP_BRAND: "istack-network",
  APP_ROOT: "http://localhost:3000",
  MENU_CUSTOMER: [
    {
      title: "Dashboard",
      icon: "dashboard",
      link: "/account/dashboard",
    },
    {
      subMenuTitle: "My Account",
      subMenuIcon: "user",
      isSubMenu: true,
      subMenuKey: "account",
      subMenuRoutes: [
        {
          title: "Profile",
          icon: "minus",
          link: "/account/profile",
        },
        {
          title: "Billing",
          icon: "minus",
          link: "/account/billing",
        },
        {
          title: "Payment Methods",
          icon: "minus",
          link: "/account/payment-methods",
        },
      ],
    },
    {
      title: "My Products",
      icon: "switcher",
      link: "/account/products",
    },
  ],
  MENU_ADMIN: [
    {
      title: "Dashboard",
      icon: "dashboard",
      link: "/admin/dashboard",
    },
    {
      title: "Customers",
      icon: "user",
      link: "/admin/customers",
    },
    {
      title: "Products",
      icon: "shop",
      link: "/admin/products",
    },
    {
      title: "Discounts",
      icon: "tag",
      link: "/admin/discounts",
    },
    {
      subMenuTitle: "Settings",
      subMenuIcon: "setting",
      isSubMenu: true,
      subMenuKey: "setting",
      subMenuRoutes: [
        {
          title: "Profile",
          icon: "minus",
          link: "/admin/profile",
        },
      ],
    },
  ],
  SHOPS: [
    {
      title: "STM",
      link: "/shop/stm",
    },
    {
      title: "iStack Training",
      link: "/shop/training",
    },
    {
      title: "FunnelFlux",
      link: "/shop/funnelflux",
    },
    {
      title: "AWC Asia",
      link: "/shop/awc-asia",
    },
    {
      title: "All",
      link: "/shop",
    },
  ],
  BRANCHES: {
    FUNNEL_FLUX: "FunnelFlux_FZCO",
    TRAINING: "iStack_Training",
    STM: "STM_Migration",
    AWC_ASIA: "AWC_Asia",
  },
  BRANCH_NAMES: {
    FunnelFlux_FZCO: "FunnelFlux",
    iStack_Training: "iStack Training",
    STM_Migration: "STM",
    AWC_Asia: "AWC Asia"
  },
  PAYMENT_METHODS: {
    "iStack_Training": ["paypal"],
    "FunnelFlux_FZCO": ["existing", "newCard"],
    "STM_Migration": ["existing", "newCard"],
    "AWC_Asia": ["existing", "newCard", "paypal"],
  },
  REDIRECT_URL: {
    DEFAULT_ADMIN: "/admin/dashboard",
    DEFAULT_STAFF: "/staff/dashboard",
    DEFAULT_CUSTOMER: "/account/profile",
  },
  PUBLIC_URL: ["/", "/auth", "/shop", "/shop/funnelflux", "/shop/training", "/shop/stm", "/shop/awc-asia", "/cart"],
  TEMPLATES: {
    iStack_Training: {
      TICKET: "https://storage.googleapis.com/pdf-generator/event-ticket.html",
      INVOICE: "http://public.istackmanila.com/istack-training-assets/email-templates/istack_training_invoice.html",
    }
  },
  THINKIFIC_ACCOUNT_ID: "5b0f5eab867e48508440c421",
  SUPPRESS_ERROR: ["jwt expired"],
};
