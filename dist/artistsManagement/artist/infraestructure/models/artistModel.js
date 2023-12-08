"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let ArtistModel = class ArtistModel extends sequelize_typescript_1.Model {
};
exports.ArtistModel = ArtistModel;
ArtistModel.ARTIST_TABLE_NAME = "artist";
ArtistModel.ARTIST_ID = "id";
ArtistModel.ARTIST_NICKNAME = "nickname";
ArtistModel.ARTIST_NAME = "name";
ArtistModel.ARTIST_LASTNAME = "lastname";
ArtistModel.ARTIST_PHONE = "phone";
ArtistModel.ARTIST_ARTTYPE = "art_type";
ArtistModel.ARTIST_LOCATION = "location";
ArtistModel.ARTIST_STATUS = "status";
ArtistModel.ARTIST_IDUSER = "id_user";
ArtistModel.ARTIST_FOLLOWERS = "followers";
ArtistModel.ARTIST_FOLLOWING = "following";
ArtistModel.ARTIST_TOTALFOLLOWERS = "total_followers";
ArtistModel.ARTIST_TOTALFOLLOWING = "total_following";
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: ArtistModel.ARTIST_ID,
    })
], ArtistModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
        unique: true,
        field: ArtistModel.ARTIST_NICKNAME,
    })
], ArtistModel.prototype, "nickname", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
        field: ArtistModel.ARTIST_NAME,
    })
], ArtistModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
        field: ArtistModel.ARTIST_LASTNAME,
    })
], ArtistModel.prototype, "lastname", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
        field: ArtistModel.ARTIST_PHONE,
    })
], ArtistModel.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING(128)),
        allowNull: false,
        field: ArtistModel.ARTIST_ARTTYPE,
    })
], ArtistModel.prototype, "art_type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: true,
        field: ArtistModel.ARTIST_LOCATION,
    })
], ArtistModel.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
        validate: { isIn: [['en proceso', 'aprobado', 'desaprobado']] },
        field: ArtistModel.ARTIST_STATUS,
    })
], ArtistModel.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        field: ArtistModel.ARTIST_IDUSER,
    })
], ArtistModel.prototype, "id_user", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING(128)),
        allowNull: false,
        field: ArtistModel.ARTIST_FOLLOWERS,
    })
], ArtistModel.prototype, "followers", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING(128)),
        allowNull: false,
        field: ArtistModel.ARTIST_FOLLOWING,
    })
], ArtistModel.prototype, "following", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
        defaultValue: null,
        field: ArtistModel.ARTIST_TOTALFOLLOWERS,
    })
], ArtistModel.prototype, "total_followers", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
        field: ArtistModel.ARTIST_TOTALFOLLOWING,
    })
], ArtistModel.prototype, "total_following", void 0);
exports.ArtistModel = ArtistModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: ArtistModel.ARTIST_TABLE_NAME,
        timestamps: true,
        paranoid: true
    })
], ArtistModel);
