require('dotenv').config()
const { ApolloServer } = require('apollo-server');
const graphQlConfig = require('./models');

const server = new ApolloServer(graphQlConfig);

server
    .listen()
    .then(({url}) => console.log(`Server is running on ${url}`))
    .catch(err => console.error(err))