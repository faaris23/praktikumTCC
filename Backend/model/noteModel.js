import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const Note = db.define("notes", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement
: true },
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    title: { type: Sequelize.STRING, allowNull: false },
    content: { type: Sequelize.TEXT, allowNull: true }
}, {
    freezeTableName: true
});

export default Note;

(async () => {
    await db.sync();
})();
