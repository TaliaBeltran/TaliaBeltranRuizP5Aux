"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nick: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateReg: {
        type: Date,
        default: Date.now(),
    },
});
exports.default = mongoose_1.model("User", userSchema);
