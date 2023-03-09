const AuthService = require("../services/auth.service.js");
const jwt = require("../utils/jwt.js");

const Auth = new AuthService()

class AuthController {
    async register(req, res, next) {
        try {
            let user = await Auth.createUser(req.body)
            if (user?.error) throw user
            user = JSON.parse(JSON.stringify(user))
            delete user.password
            delete user.verified
            res.status(201).send(user)
        } catch (error) {
            next(error)
        }
    }
    async login(req, res, next) {
        try {
            let user = await Auth.getByEmail(req.body)
            if (user?.error) throw user
            const pswdIsValid = await user?.validatePassword(req.body.password)
            if(!pswdIsValid) {
                throw {
                    error: true,
                    status: 403,
                    message: 'invalid password'
                }
            }
            user = JSON.parse(JSON.stringify(user))
            const token = jwt.sign({ id: user.id })
            user.token = token
            delete user.password
            delete user.verified
            res.status(200).send(user)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthController