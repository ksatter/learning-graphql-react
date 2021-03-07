
const auth = require('../../utils/auth')

module.exports = {
    signup: async (parent, args, context, info) => await auth.signup(args, context.prisma),

    login: async (parent, args, context, info) => await auth.login(args, context.prisma),

    createLink: async (parent, args, context, info) => {
        const newLink = await context.prisma.link.create({
            data: { 
                ...args, 
                postedBy: { connect: { id: context.userId } } }
        })

        context.pubsub.publish("New_Link", newlink)
        return newLink
    }
}
