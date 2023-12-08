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
exports.CreateArtistController = void 0;
class CreateArtistController {
    constructor(CreateArtistUseCase) {
        this.CreateArtistUseCase = CreateArtistUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('controller');
            const { nickname, name, lastname, phone, id_user, } = req.body;
            try {
                const status = 'en proceso';
                const location = '';
                const art_type = [];
                const followers = [];
                const following = [];
                const total_followers = 0;
                const total_following = 0;
                const createArtist = yield this.CreateArtistUseCase.run(nickname, name, lastname, phone, art_type, location, status, id_user, followers, following, total_followers, total_following);
                console.log(createArtist);
                /* if (createArtist instanceof Error) {
                    return res.status(409).send({
                        status: "error",
                        message: createArtist.message,
                    });
                } */
                if (createArtist) {
                    return res.status(201).send({
                        status: "success",
                        data: createArtist,
                        message: "Artista creado correctamente"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "error",
                        data: [],
                        message: "Se registró un error inesperado mientras se registraban los datos del artista.",
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
                });
            }
        });
    }
}
exports.CreateArtistController = CreateArtistController;
