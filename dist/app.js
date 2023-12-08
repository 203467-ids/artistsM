"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./database/db"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const artistRouter_1 = require("./artistsManagement/artist/infraestructure/routes/artistRouter");
const emailRouter_1 = require("./artistsManagement/artist/infraestructure/services/emailRouter");
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.databaseSync();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    databaseSync() {
        var _a;
        const db = new db_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("artists");
        });
        this.app.use('/a', artistRouter_1.artistRouter);
        this.app.use('/email', emailRouter_1.emailRouter);
    }
}
const SERVER_PORT = process.env.SERVER_PORT || 4000;
new App().app.listen(SERVER_PORT, () => {
    console.log(`✅ Server run in port ${SERVER_PORT}`);
});
