const SequelizeError = require("../errors/sequelize.error");
const UserModel = require("../models/user.model");
const { sequelize } = require("./sequelize.service");

UserModel(sequelize)

class AuthService {
    constructor() {
        this.sequelize = sequelize
        this.models = sequelize.models
    }

    async createUser({
        firstName = '',
        lastName = '',
        email = '',
        password = '',
        projectName
    }) {
        try {
            const user = await this.models.User.create({ firstName, lastName, email, password, projectName })
            return user
        } catch (error) {
            return new SequelizeError(error);
        }
    }

    async getByEmail({ email = '' }) {
        try {
            const user = await this.models.User.findOne({ where: { email } })
            return user
        } catch (error) {
            return new SequelizeError(error);
        }
    }
}

module.exports = AuthService