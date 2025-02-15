const env = require("dotenv").config();
//database configuration file
module.exports = {

    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'cqrs',
    host: process.env.DATBASE_URL,
    dialect: 'postgres',
    logging: 'false',

}