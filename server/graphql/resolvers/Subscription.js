module.exports = {
    newLink: {
        subscribe: (parent, args, context, info) => context.pubsub.asyncIterator(["NEW_LINK"]),
        resolve: payload => {
            console.log(payload)
            return payload
        }
    }
}