
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length;

const resolvers = {
    Query: {
        info: () => "Successful response",
        feed: () => links,
        link: (parent, args) => links.find(({id}) => id === args.id)
    },

    Mutation: {
        createLink: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                url: args.url,
                description: args.description
            }

            links.push(link)
            return link
        },

        updateLink: (parent, args) => {
            const index = links.findIndex(({id}) => id === args.id)
            if (index < 0) return null

            links[index] = { ...links[index], ...args}
            return links[index]
        },

        deleteLink: (parent, args) => {
            const index = links.findIndex(({id}) => id === args.id)
            if (index < 0) return null

            const link = links[index]
            links.splice(index, 1);
            return link
        }
    },
}

module.exports = resolvers