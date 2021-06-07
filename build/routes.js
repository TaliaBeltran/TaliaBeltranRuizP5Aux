"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (req, res) => {
    res.send('<h1 style="margin: 80px 80px 0px 80px">' +
        "Noemí Coronado Queca;o" +
        "</h1>" +
        '<p style="margin: 20px 0px 0px 80px">' +
        "this is my Api" +
        "</p>");
});
exports.default = router;
