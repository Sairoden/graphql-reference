const typeDefs = `#graphql
  type Query {
    products: [Product]
    orders: [Order]
    productsByPrice(min: Float!, max: Float!): [Product]
    product(id: ID!): Product!
  }

  type Mutation {
    addNewProduct(id: ID!, description: String!, price: Float!): Product
    addNewProductReview(productID: ID!, rating: Int!, comment: String): Review
  }

  type Product {
    id: ID!
    description: String!
    price: Float!
    reviews: [Review]
  }

  type Review {
    rating: Int!
    comment: String
  }

  type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
  }

  type OrderItem {
    product: Product!
    quantity: Int!
  }
`;

module.exports = typeDefs;
