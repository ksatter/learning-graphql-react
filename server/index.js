
const { ApolloServer } = require('apollo-server');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const graphQl = require('./graphQl');



const server = new ApolloServer( {...graphQl});


server
    .listen()
    .then(({url}) => console.log(`Server is running on ${url}`))
    .catch(err => console.error(err))