const { getAllOrders } = require("./ordersModel");

const orders = (parent, args, ctx, info) => {
  return getAllOrders();
};

module.exports = orders;
