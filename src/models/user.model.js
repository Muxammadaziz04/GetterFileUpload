const { Model, DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model { 
    async validatePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

const UserModel = (sequelize) => {
    User.init({
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            unique: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        projectName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        hooks: {
            beforeCreate: async function(user) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    })
}

module.exports = UserModel