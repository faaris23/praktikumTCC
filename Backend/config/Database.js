import { Sequelize } from "sequelize";

const db = new Sequelize('noteDb', 'root','',{
    host: '34.50.77.220',
    dialect : 'mysql'
})

export default db;