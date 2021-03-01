const { prismaClient, prisma } = require('@prisma/client')
const typeDefs = require('./resolvers');
const resolvers = require('./typeDefs');

module.exports = {
    typeDefs,
    resolvers,
    context: {
        prisma: new prismaClient()
    }
}