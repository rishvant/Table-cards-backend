import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    }
},
    { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

export default User;