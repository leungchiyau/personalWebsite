"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let app = (0, express_1.default)();
let port = 8100;
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.post('/contacts', (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let fullName = req.body.fullName;
    let content = req.body.content;
});
app.get('/downloadFile', (req, res) => {
    res.download('./public/file/CV.pdf');
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
