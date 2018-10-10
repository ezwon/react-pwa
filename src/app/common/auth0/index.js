import auth0 from "auth0-js";

import config from "@config";

const auth0Config = {
  clientID: config.AUTH0_CLIENT_ID,
  domain: config.AUTH0_DOMAIN,
  responseType: "token id_token",
  audience: config.AUTH0_AUDIENCE,
  redirectUri: config.AUTH0_CALLBACK,
  scope: "read:all upsert:all delete:all openid profile",
  leeway: 30,
};

const Auth0 = new auth0.WebAuth(auth0Config);

export default Auth0;
