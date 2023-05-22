const orders = [
  {
    date: "2005-05-05",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "product1",
          description: "Made by Rick Grimes",
          price: 55.59,
        },
        quantity: 5,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};

module.exports = { getAllOrders };
