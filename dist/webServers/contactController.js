"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
// import { client } from './db'
exports.contactRouter = express_1.default.Router();
exports.contactRouter.post('contact/message', (req, res) => {
    let message = req.body.message;
    let fullName = req.body.fullName;
    let email = req.body.email;
    let subject = req.body.subject;
    // knex.insert({message}).into('')
});
