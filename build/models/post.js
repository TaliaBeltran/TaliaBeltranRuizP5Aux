"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        // required:true,
    },
    dataReg: {
        type: Date,
        default: Date.now(),
    },
});
exports.default = mongoose_1.model("Post", postSchema);
