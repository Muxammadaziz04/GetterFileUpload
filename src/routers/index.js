const imageRouter = require('./image.router.js')
const videoRouter = require('./video.router.js')
const removeRouter = require('./remove.router.js')
const fileRouter = require('./file.router.js')

const routers = [
    imageRouter,
    videoRouter,
    removeRouter,
    fileRouter
]

const combineRouters = (app) => {
    routers.forEach(router => app.use(router))
}

module.exports = combineRouters