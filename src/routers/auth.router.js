const router = require('express').Router()
const AuthController = require('../controllers/auth.controller.js')

const Controller = new AuthController()

router.post('/auth/register', Controller.register)
router.post('/auth/login', Controller.login)

module.exports = router