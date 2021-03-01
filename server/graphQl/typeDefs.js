const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
    link(id:ID!): Link
  }

  type Mutation {
    createLink(url: String!, description: String!): Link!
    updateLink(id: ID!, url: String, description: String): Link
    deleteLink(id: ID!): Link
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }

  

`

module.exports = typeDefs