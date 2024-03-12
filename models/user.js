import mongoose from "mongoose";

function generateRandomNumber(length) {
    let randomNumber = '';
    for (let i = 0; i < length; i++) {
        randomNumber += Math.floor(Math.random() * 10);
    }
    return parseInt(randomNumber);
}

const userSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.Mixed,
        default: () => {
            if (mongoose.Types.ObjectId) {
                return new mongoose.Types.ObjectId();
            } else {
                return generateRandomNumber(8);
            }
        },
        unique: true,
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