module.exports = {
    feed: async (parent, args, context) => await context.prisma.link.findMany(),
}