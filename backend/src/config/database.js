import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const hostname = process.env.HOSTNAME || '10.1.1.4'
const username = process.env.BDUSER || 'admin'
const password = process.env.PASSWORD || 'MaJaWa__12'
const database = process.env.DATABASE || 'BDPRODUCTOS'
const port = process.env.DBPORT || 3306
const dialect = process.env.DIALECT || 'mysql'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port,
    dialect: dialect,
    operatorAliases: false,
    ssl: {rejectUnauthorized: false},
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
})


export default sequelize

