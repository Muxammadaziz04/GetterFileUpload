const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../configs/server.config')

module.exports = {
    sign: (payload, options) => {
        return jwt.sign(payload, JWT_SECRET, options)
    },
    verify: (token, cb) => {
        return jwt.verify(token, JWT_SECRET, cb)
    }
}