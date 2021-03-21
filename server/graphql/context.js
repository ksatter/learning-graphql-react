const { PrismaClient } = require('@prisma/client');
const { getUserId } = require('../utils/auth.js')
const { PubSub } = require('apollo-server')

module.exports = ({req})  => ({
    ...req, 
    prisma: new PrismaClient(),
    pubsub: new PubSub(),
    userId: req && req.headers.authorization ? getUserId(req) : null
})