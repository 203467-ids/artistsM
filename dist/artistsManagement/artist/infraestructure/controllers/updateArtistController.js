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
exports.UpdateArtistController = void 0;
class UpdateArtistController {
    constructor(updateArtistUseCase) {
        this.updateArtistUseCase = updateArtistUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nickname, name, lastname, phone, art_type } = req.body;
                const updatedArtist = yield this.updateArtistUseCase.run(parseInt(id), nickname, name, lastname, phone, art_type);
                if (updatedArtist) {
                    return res.status(201).send({
                        status: "success",
                        message: "Artista actualizado con éxito",
                        data: updatedArtist,
                    });
                }
                else {
                    return res.status(500).send({
                        status: "error",
                        message: "No se encontró o no se puede actualizar al artista",
                    });
                }
            }
            catch (error) {
                console.error("Error al actualizar al artista:", error);
                return res.status(500).send({
                    status: "error",
                    message: "Error al actualizar al artista: " + error,
                });
            }
        });
    }
}
exports.UpdateArtistController = UpdateArtistController;
