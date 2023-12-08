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
exports.ArtistRepositoryImpl = void 0;
const artistModel_1 = require("../../infraestructure/models/artistModel");
const nodeMailerEmailService_1 = require("../services/nodeMailerEmailService");
/* import { compare, encrypt } from '../../../helpers/hash';
import { tokenSigIn } from "../../../helpers/token"; */
class ArtistRepositoryImpl {
    createArtist(nickname, name, lastname, phone, art_type, location, id_user, status, followers, following, total_followers, total_following) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Crear el artista
                const createdArtist = yield artistModel_1.ArtistModel.create({
                    nickname,
                    name,
                    lastname,
                    phone,
                    art_type,
                    location,
                    status,
                    id_user,
                    followers,
                    following,
                    total_followers,
                    total_following,
                });
                // Obtener la dirección de correo electrónico del nuevo artista (si es relevante)
                const emailService = new nodeMailerEmailService_1.NodemailerEmailService(createdArtist.id);
                const artistEmail = 'enrique.farrera.ids@gmail.com'; // Debes reemplazar esto con la lógica real para obtener el correo del artista
                // Enviar el correo electrónico
                yield emailService.sendEmail(artistEmail, 'Correo de confirmacion', 'Verifique su cuenta');
                return createdArtist;
            }
            catch (error) {
                console.error('Error al crear el artista:', error);
                return null;
            }
        });
    }
    listAllArtists() {
        return artistModel_1.ArtistModel.findAll();
    }
    getArtistById(id) {
        return artistModel_1.ArtistModel.findOne({ where: { id } });
    }
    updateArtist(id, nickname, name, lastname, phone, art_type) {
        return __awaiter(this, void 0, void 0, function* () {
            return artistModel_1.ArtistModel.update({ nickname, name, lastname, phone, art_type }, { where: { id } })
                .then(([updatedRows]) => {
                if (updatedRows > 0) {
                    return artistModel_1.ArtistModel.findOne({ where: { id } });
                }
                else {
                    return null;
                }
            })
                .catch((error) => {
                console.error('Error actualizando al artista:', error);
                return 'Error actualizando al artista';
            });
        });
    }
    updateLocation(id, location) {
        return __awaiter(this, void 0, void 0, function* () {
            return artistModel_1.ArtistModel.update({ location }, { where: { id } })
                .then(([updatedRows]) => {
                if (updatedRows > 0) {
                    return artistModel_1.ArtistModel.findOne({ where: { id } });
                }
                else {
                    return null;
                }
            })
                .catch((error) => {
                console.error('Error actualizando al artista:', error);
                return error;
            });
        });
    }
    validateArtist(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return artistModel_1.ArtistModel.update({ status }, { where: { id } })
                .then(([updatedRows]) => {
                if (updatedRows > 0) {
                    return artistModel_1.ArtistModel.findOne({ where: { id } });
                }
                else {
                    return null;
                }
            })
                .catch((error) => {
                console.error('Error actualizando al artista:', error);
                return error;
            });
        });
    }
    updateFollowing(id, following, total_following) {
        return __awaiter(this, void 0, void 0, function* () {
            return artistModel_1.ArtistModel.update({ following, total_following }, { where: { id } })
                .then(([updatedRows]) => {
                if (updatedRows > 0) {
                    return artistModel_1.ArtistModel.findOne({ where: { id } });
                }
                else {
                    return null;
                }
            })
                .catch((error) => {
                console.error('Error actualizando el seguimiento:', error);
                return error;
            });
        });
    }
    updateFollowers(id, followers, total_followers) {
        return __awaiter(this, void 0, void 0, function* () {
            return artistModel_1.ArtistModel.update({ followers, total_followers }, { where: { id } })
                .then(([updatedRows]) => {
                if (updatedRows > 0) {
                    return artistModel_1.ArtistModel.findOne({ where: { id } });
                }
                else {
                    return null;
                }
            })
                .catch((error) => {
                console.error('Error actualizando los seguidores:', error);
                return error;
            });
        });
    }
    filterFollowersById(id) {
        return artistModel_1.ArtistModel.findOne({
            attributes: ['followers', 'total_followers'],
            where: { id },
        });
    }
    filterFollowingById(id) {
        return artistModel_1.ArtistModel.findOne({
            attributes: ['following', 'total_following'],
            where: { id },
        });
    }
}
exports.ArtistRepositoryImpl = ArtistRepositoryImpl;
