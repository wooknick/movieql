"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolvers = require("./graphql/resolvers");

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _graphqlYoga.GraphQLServer({
    typeDefs: "./src/graphql/schema.graphql",
    resolvers: _resolvers2.default,
    introspection: true,
    playground: true
});

server.start(function () {
    return console.log("GraphQL Server Running");
});