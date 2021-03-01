const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
    link(id:Int!): Link
  }

  type Mutation {
    createLink(url: String!, description: String!): Link!
    updateLink(id: Int!, url: String, description: String): Link
    deleteLink(id: Int!): Link
  }

  type Link {
    id: Int!
    description: String!
    url: String!
  }
`

module.exports = typeDefs