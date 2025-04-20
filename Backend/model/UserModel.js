import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const User = db.define('users',{
    id: {type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:Sequelize.STRING,allowNull:true},
    password: {type:Sequelize.STRING(255),allowNull:false}},
    {
        freezeTableName:true
    });

export default User;

(async()=>{
    await db.sync();
})(); 



 