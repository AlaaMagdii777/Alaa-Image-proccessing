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
exports.visualDesignGalleryDir = exports.fullDir = void 0;
const path_1 = __importDefault(require("path"));
const GalleryEditor_1 = __importDefault(require("./GalleryEditor"));
exports.fullDir = path_1.default.resolve(__dirname, "./../galleries/full");
exports.visualDesignGalleryDir = path_1.default.resolve(__dirname, "./../galleries/visualDesignGallery");
const setImage = (query) => __awaiter(void 0, void 0, void 0, function* () {
    if (!query.title || !query.width || !query.height) {
        return null;
    }
    const height = parseInt(query.height);
    const width = parseInt(query.width);
    // /http://localhost:3000/api/gallery?title=palmtunnel&height=700&width=400
    const source = path_1.default.resolve(exports.fullDir, `${query.title}.jpg`);
    const target = path_1.default.resolve(exports.visualDesignGalleryDir, `${query.title}-${height}${width}.jpg`);
    const galleryModel = new GalleryEditor_1.default(height, width, source, target);
    const show = yield galleryModel.resizeGallery();
    if (show) {
        return target;
    }
    return null;
});
exports.default = setImage;
