import bodyParser from "body-parser";
import express from "express";
import connectDB from "./db/index.js";
import User from "./models/user.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
connectDB();
app.use(cors());

app.get("/table", async (req, res) => {
    try {
        const user = await User.find();
        return res.json({ user });
    }
    catch (err) {
        console.log("Error:", err);
    }
});

app.post("/table", async (req, res) => {
    try {
        const { userId, username, firstName, lastName, email, phone } = req.body;
        const newUser = new User({ userId, username, firstName, lastName, email, phone });
        await newUser.save();
        res.status(200).json({ message: "user added" });
    }
    catch (err) {
        console.log("Error:", err);
    }
});

app.put("/table/:id", async (req, res) => {
    try {
        const Id = req.params.id;
        const { userId, username, firstName, lastName, email, phone } = req.body;
        await User.findByIdAndUpdate(Id, { userId, username, firstName, lastName, email, phone });
        res.status(200).json({ message: "updated user" });
    }
    catch (err) {
        console.log("Error:", err);
    }
});

app.delete("/table/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
    }
    catch (err) {
        console.log("Error:", err);
    }
});

app.get("/card", async (req, res) => {
    try {
        const cards = await User.find();
        return res.json({ cards });
    }
    catch (err) {
        console.log("Error:", err);
    }
});

app.post("/card", async (req, res) => {
    try {
        const { firstName, email, phone } = req.body;
        const newCard = new User({ firstName, email, phone });
        await newCard.save();
        res.status(200).json({ message: "created new card" });
    }
    catch (err) {
        console.log("Error:", err);
    }
});

app.put("/card/:id", async (req, res) => {
    try {
        const cardId = req.params.id;
        const { firstName, email, phone } = req.body;
        await User.findByIdAndUpdate(cardId, { firstName, email, phone });
        res.status(200).json({ message: "updated card" });
    }
    catch (err) {
        console.log("Error:", err);
    }
});

app.delete("/card/:id", async (req, res) => {
    try {
        const cardId = req.params.id;
        await User.findByIdAndDelete(cardId);
        res.status(200).json({ message: "deleted card" });
    }
    catch (err) {
        console.log("Error:", err);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});