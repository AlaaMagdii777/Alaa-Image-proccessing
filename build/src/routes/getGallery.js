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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVisualDesignGallery = exports.getGallery = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const setGallery_1 = require("./setGallery");
const presentGallery = (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.access(path);
        return path;
    }
    catch (_a) {
        return null;
    }
});
const getGallery = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const galleryUrl = path_1.default.resolve(setGallery_1.fullDir, `${title}.jpg`);
    return yield presentGallery(galleryUrl);
});
exports.getGallery = getGallery;
const getVisualDesignGallery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const visualDesignGalleryPath = path_1.default.resolve(setGallery_1.visualDesignGalleryDir, 
    //visualDesignGalleryDir
    `${query.title}-${query.height}${query.width}.jpg`);
    return yield presentGallery(visualDesignGalleryPath);
});
exports.getVisualDesignGallery = getVisualDesignGallery;
