// Apollo Server
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const app = require("./app");

// Graphql
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
    },
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));
};

app.listen(3000, () => {
  startApolloServer();
  console.log(`Listening on PORT: 3000`);
});

// 20 ka na

