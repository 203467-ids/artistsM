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
exports.UpdateFollowingUseCase = void 0;
class UpdateFollowingUseCase {
    constructor(ArtistRepository) {
        this.ArtistRepository = ArtistRepository;
    }
    run(id, following, total_following) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id || !following) {
                    return null;
                }
                const updateArtist = yield this.ArtistRepository.updateFollowing(id, following, total_following);
                if (updateArtist === null) {
                    return null;
                }
                return updateArtist;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.UpdateFollowingUseCase = UpdateFollowingUseCase;
