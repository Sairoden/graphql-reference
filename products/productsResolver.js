const productsModel = require("./productsModel");

const products = (parent, args, ctx, info) => {
  return productsModel;
};

const product = (parent, args, ctx, info) => {
  return productsModel.find(product => product.id === args.id);
};

const productsByPrice = (parent, args, ctx, info) => {
  return productsModel.filter(
    product => product.price >= args.min && product.price <= args.max
  );
};

const addNewProduct = (parent, args, ctx, info) => {
  const newProduct = {
    id: args.id,
    description: args.description,
    price: args.price,
    reviews: [],
  };

  productsModel.push(newProduct);

  return newProduct;
};

const addNewProductReview = (parent, args, ctx, info) => {
  const product = productsModel.find(product => product.id === args.productID);

  if (!product) throw new Error("Product not found");

  const { rating, comment } = args;
  const newReview = { rating, comment };

  product.reviews.push(newReview);

  return newReview;
};

module.exports = {
  products,
  product,
  productsByPrice,
  addNewProduct,
  addNewProductReview,
};
