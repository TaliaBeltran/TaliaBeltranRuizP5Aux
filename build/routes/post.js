"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../controllers/post");
const router = express_1.Router();
router.get("/", post_1.postControllers.index);
router.post("/new", post_1.postControllers.newPost);
router.put("/edit/:id", post_1.postControllers.editPost);
router.delete("/delete/:id", post_1.postControllers.deletePost);
exports.default = router;
