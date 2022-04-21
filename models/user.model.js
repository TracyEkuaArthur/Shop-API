const { Schema, model } = require("mongoose");

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        length: 6,
    },
},
    {
     timestamp: true,

    }
    
);

module.exports = model("User", userSchema);