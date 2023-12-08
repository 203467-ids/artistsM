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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateArtistController = void 0;
const sequelize_1 = require("sequelize");
class ValidateArtistController {
    constructor(validateArtistUseCase) {
        this.validateArtistUseCase = validateArtistUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                let { status } = req.body;
                let updatedArtist;
                try {
                    // Intenta ejecutar la validación y la actualización en la base de datos
                    console.log(id);
                    const idartist = parseInt(id);
                    updatedArtist = yield this.validateArtistUseCase.run(idartist, status);
                    console.log(id);
                    return res.status(201).json({
                        status: "success",
                        message: "Estado modificado con éxito",
                        data: updatedArtist,
                    });
                }
                catch (error) {
                    // Manejar el error de validación de Sequelize
                    if (error instanceof sequelize_1.ValidationError) {
                        const errors = error.errors.map((error) => ({
                            message: error.message,
                            type: error.type,
                            path: error.path,
                            value: error.value,
                        }));
                        return res.status(400).json({
                            status: "error",
                            message: "Error de validación",
                            errors,
                        });
                    }
                    else {
                        throw error;
                    }
                }
            }
            catch (error) {
                console.error("Error al modificar estado:", error);
                return res.status(500).json({
                    status: "error",
                    message: "Error al modificar el estado",
                });
            }
        });
    }
}
exports.ValidateArtistController = ValidateArtistController;
