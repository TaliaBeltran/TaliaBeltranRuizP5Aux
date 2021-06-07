"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postControllers = void 0;
const post_1 = __importDefault(require("../models/post"));
class PostControllers {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield post_1.default.find({});
            res.json({ message: "all Posts", posts });
        });
    }
    newPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, body } = req.body;
            const nPost = new post_1.default(req.body);
            yield nPost.save();
            res.json({ message: "Post created", nPost });
        });
    }
    editPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, body } = req.body;
            const ePost = yield post_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.json({ message: "Post update", ePost });
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const dPost = yield post_1.default.findByIdAndDelete(id);
            res.json({ message: "Post delete", dPost });
        });
    }
}
exports.postControllers = new PostControllers();
