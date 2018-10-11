import {createSelector} from "reselect";
import _ from "lodash";

const getProductsForGroupList = createSelector(
  state => state.branchesList,
  state => state.products.getIn(["productsList"]).toJS(),
  (branches, products) => {
    const result = [];
    branches.forEach(branch => {
      const tempProducts = products.filter(product => product.branch_id === branch._id);
      if (tempProducts) {
        result.push({
          groupLabel: branch.name,
          groupValue: tempProducts.map(p => ({
            label: p.is_active ? p.name : p.name + " (Inactive)",
            value: p._id,
          })),
        });
      }
    });

    return result;
  }
);

const makeSelectProductsList = createSelector(
  state => state.products,
  products => products.getIn(["productsList"]).toJS(),
);

const makeSelectProductTable = createSelector(
  state => state.products,
  products => products.getIn(["productsTable"]).toJS(),
);

const makeSelectProductsForCreateInvoice = createSelector(
  state => state.products,
  products => {
    const result = products.getIn(["productsTable"],[]).toJS();

    return _.map(result.data,(product)=>{
      product.title = product.name;
      product.value = product.name;
      return product;
    });
  },
);



export {
  getProductsForGroupList,
  makeSelectProductsList,
  makeSelectProductTable,
  makeSelectProductsForCreateInvoice,
};
