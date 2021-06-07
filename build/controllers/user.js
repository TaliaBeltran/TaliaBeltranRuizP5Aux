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
exports.userControllers = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserControllers {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.send("Hola a todos");
            const users = yield user_1.default.find({});
            res.json({ message: "all users", users });
        });
    }
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const findUser = yield user_1.default.findById(id);
            res.json({ message: "my profile", findUser });
        });
    }
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullname, email, nick, password } = req.body;
            const nUser = new user_1.default(req.body);
            yield nUser.save();
            res.json({ message: "user registrered", nUser });
            res.status(101).end();
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { fullname, email, nick, password } = req.body;
            const eUser = yield user_1.default.findByIdAndUpdate(id, req.body);
            res.json({ message: "usuario actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const dUser = yield user_1.default.findByIdAndDelete(id);
            res.json({ message: "usuario eliminado" });
        });
    }
}
exports.userControllers = new UserControllers();
