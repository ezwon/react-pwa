export default {
  NODE_ENV: "production",
  SANDBOX: true,
  PORT: 3002,
  PAYPAL_ENV: "production",
  STRIPE_PUBLIC_KEY: "pk_live_2v8dEUWgCEZPPwN1PK1HpBMZ",
  AUTH0_CLIENT_ID: "pY3o4uYoxBJz8wNMeXldBN2pZ6tqKSun",
  AUTH0_DOMAIN: "auth.istack.network",
  AUTH0_AUDIENCE: "https://api.istack.network/",
  AUTH0_CALLBACK: "https://istack.network/auth",
  AUTH0_NAMESPACE: "https://istacknetwork.com/",
  AUTH0_ACCOUNTS: "istack_accounts",
  AUTH0_REDIRECT_CART: "https://istack.network/cart",
  AUTH0_REDIRECT_SHOP: "https://istack.network/shop",
  API_URL: "https://api.istack.network",
  AUTH0_DATABASE: "iStack-Network-Production",
  APP_BRAND: "istack-network",
  APP_ROOT: "https://istack.network",
  MENU_CUSTOMER:  [
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
      title: "iStack Training",
      link: "/shop/training",
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
  TEMPLATES:{
    iStack_Training: {
      TICKET: "https://storage.googleapis.com/pdf-generator/template.html",
      INVOICE: "http://public.istackmanila.com/istack-training-assets/email-templates/istack_training_invoice.html",
    }
  },
  THINKIFIC_ACCOUNT_ID: "5b0f5eab867e48508440c421",
  SUPPRESS_ERROR: ["jwt expired"],
};
