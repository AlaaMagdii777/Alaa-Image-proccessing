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
const express_1 = __importDefault(require("express"));
const setGallery_1 = __importDefault(require("../setGallery"));
const getGallery_1 = require("../getGallery");
const Gallery = express_1.default.Router();
const checkGallery = (width, height) => {
    if (Number.isNaN(width) || Number.isNaN(height) || width < 1 || height < 1) {
        return false;
    }
    return true;
};
const gallaryHandleApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.query.title) {
        //Validation Title & height & width
        if (req.query.height || req.query.width) {
            const validation = checkGallery(parseInt(req.query.width), parseInt(req.query.height));
            if (validation) {
                let thumbnail = yield (0, getGallery_1.getVisualDesignGallery)(req.query);
                if (thumbnail) {
                    res.sendFile(thumbnail);
                }
                else {
                    thumbnail = yield (0, setGallery_1.default)(req.query);
                    if (thumbnail) {
                        res.sendFile(thumbnail);
                    }
                    else {
                        res.status(200).json({
                            response: "Gallery not found ?!",
                        });
                    }
                }
            }
            else {
                res.status(200).json({ response: "Somthing happend height or width is null !" });
            }
        }
        else {
            const Gallery = yield (0, getGallery_1.getGallery)(req.query.title);
            if (Gallery) {
                res.sendFile(Gallery);
            }
            else {
                res.status(404).json({ response: "Gallery not found!" });
            }
        }
    }
    else {
        res.status(200).json({ response: "Something happend Gallery title is null ?!" });
    }
});
Gallery.get("/", gallaryHandleApi);
exports.default = Gallery;
