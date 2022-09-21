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
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
const setGallery_1 = require("./setGallery");
class GalleryEditor {
    constructor(height, width, source, target) {
        //Create-Visual-Design-Gallery    
        this.createDirVisualDesignGallery = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_1.promises.access(setGallery_1.visualDesignGalleryDir);
            }
            catch (_a) {
                fs_1.promises.mkdir(setGallery_1.visualDesignGalleryDir);
            }
        });
        //Resize-Gallery
        this.resizeGallery = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.createDirVisualDesignGallery();
                yield (0, sharp_1.default)(this.source)
                    .resize(this.height, this.width)
                    .toFormat("jpg")
                    .toFile(this.target);
                return true;
            }
            catch (_b) {
                return false;
            }
        });
        this.height = height;
        this.width = width;
        this.source = source;
        this.target = target;
    }
}
exports.default = GalleryEditor;
