const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!
  }

  type Book {
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  #Queries
  type Query {
    getSingleUser: User!
  }
`;

module.exports = { typeDefs };
