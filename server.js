import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import db from "./Backend/config/Database.js";
import User from "./Backend/model/UserModel.js";


const app = express();
app.use(cors());
app.use(express.json());

// Register
app.post("/api/register", async (req, res) => {
    try {
        const { name, password } = req.body;

        // Hash password sebelum disimpan ke DB
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.create({
            name: name,
            password: hashedPassword
        });

        res.json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to register user" });
    }
});

// Login
app.post("/api/login", async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({ where: { name: name } });

        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        res.json({ message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to login" });
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

