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
exports.CreateArtistUseCase = void 0;
//import { encrypt } from "../../helpers/hash";
class CreateArtistUseCase {
    constructor(artistRepository) {
        this.artistRepository = artistRepository;
    }
    run(nickname, name, lastname, phone, art_type, location, status, id_user, followers, following, total_followers, total_following) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!nickname || !name || !lastname || !phone || !id_user) {
                    return null;
                }
                const registerArtist = yield this.artistRepository.createArtist(nickname, name, lastname, phone, art_type, location, id_user, status, followers, following, total_followers, total_following);
                console.log(registerArtist);
                if (registerArtist === null) {
                    return null;
                }
                return registerArtist;
            }
            catch (error) {
                console.error("Error in CreateArtistUseCase:", error);
                return null;
            }
        });
    }
}
exports.CreateArtistUseCase = CreateArtistUseCase;
