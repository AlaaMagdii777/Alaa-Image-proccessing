"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const gallery_1 = __importDefault(require("./src/routes/api/gallery"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const server = (0, express_1.default)();
const SERVER_PORT = process.env.SERVER_PORT || 8080;
server.use((0, morgan_1.default)("dev"));
server.use("/api/gallery", gallery_1.default);
// Url-Welcome-Alaa
server.get("/", (req, res) => {
    res.send("<span>Welcome Alaa Magdy</span>");
});
//Error-404-notFound
// app.get("*", (req: Request, res: Response)=>{
//     res.status(404).send("what??!! not found");
//   });
//Error-500-
server.use((err, req, res, next) => {
    res.status(500).json({ Errors: err.stack });
});
server.listen(SERVER_PORT, () => {
    console.log(`Welcome Alaa Server runs well! on port ${SERVER_PORT}`);
});
exports.default = server;
