


const resolvers = {
    Query: {
        info: () => "Successful response",
        feed: async (parent, args, context) => await context.prisma.link.findMany(),
        link: async (parent, args, context) => await context.prisma.link.findUnique({where: args})
    },

    Mutation: {
        createLink: async (parent, args, context) => await context.prisma.link.create({data: args}),
        updateLink: async (parent, args, context) => await context.prisma.link.update({where: {id: args.id}, data: args}),
        deleteLink: async (parent, args, context) => await context.prisma.link.delete({where: args})
    },
}

module.exports = resolvers