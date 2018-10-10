import superagent from "superagent";
import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";

import config from "@config";

const host = config.API_URL;
export const app = feathers().configure(rest(host).superagent(superagent));
//.configure(feathers.authentication({ storage: window.localStorage })); // use if implementing Feathers Authentication

const addHeader = hook => {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    const headers = Object.assign({}, hook.params.headers, {
      authorization: `Bearer ${accessToken}`,
    });
    // console.log('header: ', headers);
    hook.params.headers = headers;
  }
  return Promise.resolve(hook);
};

/* Alternative
* source: https://github.com/feathersjs/feathers/issues/262

app.mixins.push((service) => {
  service.before(addHeader);
});
app.service('categories').before({
  all: addHeader
})
*/

app.mixins.push(service => {
  service.hooks({
    before: {
      all: addHeader,
    },
  });
});

// export const clientUsersService = app.service("client/customers");
// export const eventService = app.service("admin/events");
// export const branchService = app.service("admin/branches");
// export const productService = app.service("admin/products");
// export const discountsService = app.service("admin/discounts");
// export const getService = name => app.service(name);
