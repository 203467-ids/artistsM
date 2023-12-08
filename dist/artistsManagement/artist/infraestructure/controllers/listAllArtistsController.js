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
exports.ListAllArtistsController = void 0;
class ListAllArtistsController {
    constructor(listAllArtistUseCase) {
        this.listAllArtistUseCase = listAllArtistUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artists = yield this.listAllArtistUseCase.run();
                console.log(artists);
                if (artists) {
                    return res.status(200).send({
                        status: 'success',
                        data: artists,
                        message: 'Lista de artistas obtenida exitosamente',
                    });
                }
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encontraron artistas',
                });
            }
            catch (error) {
                console.error("Error recuperando Artistas:", error);
                return res.status(500).send({
                    status: "error",
                    data: [],
                    message: "Error al recuperar los artistas",
                });
            }
        });
    }
}
exports.ListAllArtistsController = ListAllArtistsController;
