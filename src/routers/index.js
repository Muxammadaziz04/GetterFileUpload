const authRouter = require('./auth.router.js')
const imageRouter = require('./image.router.js')
const videoRouter = require('./video.router.js')
const removeRouter = require('./remove.router.js')

const routers = [
    authRouter,
    imageRouter,
    videoRouter,
    removeRouter
]

const combineRouters = (app) => {
    routers.forEach(router => app.use(router))
}

module.exports = combineRouters