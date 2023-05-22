const {
  products,
  productsByPrice,
  product,
} = require("../products/productsResolver");
const orders = require("../orders/ordersResolver");

const Query = {
  products,
  product,
  productsByPrice,
  orders,
};

module.exports = Query;
