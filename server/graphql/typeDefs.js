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
    signup(email: String!, password: String!, name:String!): AuthPayload
    login(email:String!, password: String!): AuthPayload,
  }

  type Subscription {
    newLink: Link
  }

  type Link {
    id: Int!
    description: String!
    url: String!
    postedBy: User
  }

  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: Int!
    name: String!
    email: String!
    links: [Link!]!
  }
`

module.exports = typeDefs