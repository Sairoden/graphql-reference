const {
  addNewProduct,
  addNewProductReview,
} = require("../products/productsResolver");

const Mutation = {
  addNewProduct,
  addNewProductReview,
};

module.exports = Mutation;
