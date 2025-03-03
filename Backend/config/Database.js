import { Sequelize } from "sequelize";

const db = new Sequelize('noteDb', 'root','',{
    host: 'localhost',
    dialect : 'mysql'
})

export default db;