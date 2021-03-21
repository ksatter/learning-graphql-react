
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
        console.log(newLink)
        context.pubsub.publish("NEW_LINK", newLink)
        return newLink
    },

}
