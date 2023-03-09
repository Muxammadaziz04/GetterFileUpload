class SequelizeError{
    constructor(err){
        if(err?.errors?.length > 0){
            this.error = {
                error: true,
                status: 409,
                message: err?.errors?.[0]?.message
            }
        }
    }
}

module.exports = SequelizeError