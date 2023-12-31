"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistRouter = void 0;
const express_1 = __importDefault(require("express"));
const authenticator_1 = require("../../../../middlewares/authenticator");
const dependencies_1 = require("../dependencies");
exports.artistRouter = express_1.default.Router();
exports.artistRouter.use(authenticator_1.authenticaMiddleware);
exports.artistRouter.post('/', dependencies_1.createArtistController.run.bind(dependencies_1.createArtistController));
exports.artistRouter.get('/', dependencies_1.listAllArtistsController.run.bind(dependencies_1.listAllArtistsController));
exports.artistRouter.get('/:id', dependencies_1.getArtistByIdController.run.bind(dependencies_1.getArtistByIdController));
exports.artistRouter.put('/:id', dependencies_1.updateArtistController.run.bind(dependencies_1.updateArtistController));
exports.artistRouter.put('/location/:id', dependencies_1.updateLocationController.run.bind(dependencies_1.updateLocationController));
exports.artistRouter.put('/validate/:id', dependencies_1.validateArtistController.run.bind(dependencies_1.validateArtistController));
exports.artistRouter.put('/follow/:id', dependencies_1.updateFollowingController.run.bind(dependencies_1.updateFollowingController));
exports.artistRouter.get('/followers/:id', dependencies_1.filterFollowersByIdController.run.bind(dependencies_1.filterFollowersByIdController));
exports.artistRouter.get('/following/:id', dependencies_1.filterFollowingByIdController.run.bind(dependencies_1.filterFollowingByIdController));
