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
exports.UpdateFollowingController = void 0;
const sequelize_1 = require("sequelize");
const artistModel_1 = require("../models/artistModel");
class UpdateFollowingController {
    constructor(updateFollowingUseCase, updateFollowersUseCase) {
        this.updateFollowingUseCase = updateFollowingUseCase;
        this.updateFollowersUseCase = updateFollowersUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                const nuevoFollow = req.body.following;
                let updatedFollowing;
                let updatedFollowers;
                try {
                    // Intenta ejecutar la validación y la actualización en la base de datos
                    console.log(id);
                    const id_artist = parseInt(id);
                    const artist = yield artistModel_1.ArtistModel.findByPk(id);
                    const id_artistaux = parseInt(nuevoFollow[0]);
                    const artistaux = yield artistModel_1.ArtistModel.findByPk(id_artistaux);
                    if (artist && artistaux) {
                        artist.following.push(nuevoFollow[0]);
                        updatedFollowing = yield this.updateFollowingUseCase.run(id_artist, artist.following, artist.following.length);
                        //--------------------------------------------------------------------------
                        artistaux.followers.push(id);
                        artistModel_1.ArtistModel.update({ followers: artistaux.followers,
                            total_followers: artistaux.followers.length
                        }, { where: { id: id_artistaux } });
                        //updatedFollowers = await this.updateFollowersUseCase.run(id_artistaux, artist.followers, artist.followers.length);
                    }
                    return res.status(201).json({
                        status: "success",
                        message: "Seguimiento con éxito",
                        data: updatedFollowing,
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
                            message: "Error de seguimiento",
                            errors,
                        });
                    }
                    else {
                        throw error;
                    }
                }
            }
            catch (error) {
                console.error("Error actualizando seguimiento:", error);
                return res.status(500).json({
                    status: "error",
                    message: "Error al actualizar el seguimiento",
                });
            }
        });
    }
}
exports.UpdateFollowingController = UpdateFollowingController;
