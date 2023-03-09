const path = require('path')
const fs = require('fs')

class RemoveController{
    async removeFile(req, res, next) {
        try {
            const pathName = req.body?.url?.replace(/^[a-z]{4,5}\:\/{2}[a-z]{1,}\:[0-9]{1,4}.(.*)/, '$1')
            if (pathName) {
                fs.unlink(path.join(__dirname, '../../uploads', pathName), (err) => {
                    if(err) {
                        console.log("Remove file error :", err);
                    }
                })
            }
            res.status(204).send('deleted')
        } catch (error) {
            next(error)
        }
    }
}

module.exports = RemoveController