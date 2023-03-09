const { Sequelize } = require("sequelize");
const dbConfig = require("../configs/db.config");

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASSWORD, dbConfig.SEQUELIZE_CONFIG);

const connectToDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('DB Connected');
        process.env.NODE_ENV !== 'production' ? sequelize.sync({alter: true}) : sequelize.sync()
    } catch (error) {
        console.log(`Failed to connect db: ${error}`);
    }
}

module.exports = {
    connectToDB,
    sequelize
}