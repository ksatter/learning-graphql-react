module.exports = {
    postedBy: async (parent, args, context) => {
        console.log( context.prisma.link.findUnique({where: {id: parent.id}}).postedBy())
        return await context.prisma.link.findUnique({where: {id: parent.id}}).postedBy()}
}