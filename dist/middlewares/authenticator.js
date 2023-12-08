"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticaMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.SECRET_JWT;
const authenticaMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    try {
        const decode = jsonwebtoken_1.default.verify(token, secretKey);
        req.token = decode;
        next();
    }
    catch (error) {
        return res.status(401).json({
            error: 'unauthorized'
        });
    }
};
exports.authenticaMiddleware = authenticaMiddleware;
