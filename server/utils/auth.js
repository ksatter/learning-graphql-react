const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const secret = process.env.APP_SECRET

module.exports = {
    getUserId: (req, authToken) => {
        const token = authToken || req.headers.authorization.replace('Bearer ', '');
        if (!token) throw new Error('No token found');

        const { userId } = jwt.verify(token, secret);
        if (!userId) throw new Error('Not Authenticated')

        return userId
    },
    signup: async (user, db) => {
        const password = await bcrypt.hash(user.password, 10);
        const dbUser = await db.user.create({ data: { ...user, password } });

        const token = jwt.sign({ userId: dbUser.id }, secret)

        return { token, user: dbUser }
    },
    login: async (user, db) => {
        const dbUser = await db.user.findUnique({ where: { email: user.email } })
        if (!dbUser) throw new Error('User not found')

        const valid = await bcrypt.compare(user.password, dbUser.password)
        if (!valid) throw new Error('Invalid Password')

        const token = jwt.sign({ userId: dbUser.id }, secret)

        return { token, user: dbUser }
    }
}