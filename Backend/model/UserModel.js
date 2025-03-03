import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const User = db.define('users',{
    name:{type:Sequelize.STRING,allowNull:true},
    email: Sequelize.STRING,
    gender: Sequelize.STRING},{

        freezeTableName:true//Buat nama table gak jama, defaultnya convert nama jadi jamak //,
        //timestamps: true,   // Tetep aktifin createdAt & updatedAt
       // createdAt: 'tanggal_dibuat',  // Ubah nama createdAt jadi "tanggal_dibuat"
        //updatedAt: 'tanggal_diubah'   // Ubah nama updatedAt jadi "tanggal_diubah"

    
});

export default User;

(async()=>{
    await db.sync();
})(); //ngesync ke db, kalo gak ada bakal buat otomatis table sesuai model



 