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
exports.emailRouter = void 0;
const express_1 = __importDefault(require("express"));
const emailApplicationService_1 = require("../../application/emailApplicationService");
const nodeMailerEmailService_1 = require("./nodeMailerEmailService");
const emailRouter = express_1.default.Router();
exports.emailRouter = emailRouter;
emailRouter.post('/send/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Obtener el id del parámetro de la ruta
        const { to, subject, text } = req.body;
        if (!id || !to || !subject || !text) {
            return res.status(400).json({ error: 'Los campos "id," "to," "subject," y "text" son obligatorios.' });
        }
        // Crear una nueva instancia del servicio de correo electrónico con el id proporcionado
        const emailService = new nodeMailerEmailService_1.NodemailerEmailService(parseInt(id));
        const emailAppService = new emailApplicationService_1.EmailApplicationService(emailService);
        yield emailAppService.sendEmail(to, subject, text);
        res.status(200).send('Correo electrónico enviado satisfactoriamente');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error mandando correo electrónico');
    }
}));
