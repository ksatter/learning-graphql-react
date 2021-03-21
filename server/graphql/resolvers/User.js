module.exports = {
    links: (parent, args, context) => context.prisma.user.findUnique({where: {id: parent.id}}).links()
}