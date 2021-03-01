const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');

const graphQl = require('./graphQl')

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length




const server = new ApolloServer( graphQl )


server
    .listen()
    .then(({
        url
    }) => console.log(`Server is running on ${url}`))
    .catch(err => console.error(err))