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
exports.visualDesignGalleryDir = exports.galleryDir = void 0;
//SuperTest
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
//Testing Path
const path_1 = __importDefault(require("path"));
// import resizeGallery from "./../routes/GalleryEditor"
const GalleryEditor_1 = __importDefault(require("./../routes/GalleryEditor"));
const request = (0, supertest_1.default)(server_1.default);
//Img Testing
exports.galleryDir = path_1.default.resolve(__dirname, './../galleries/full');
exports.visualDesignGalleryDir = path_1.default.resolve(__dirname, './../galleries/visualDesignGallery');
//Source Gallery
const source = path_1.default.resolve(exports.galleryDir, 'icelandwaterfall.jpg');
//Target title with dimensions
const target = path_1.default.resolve(exports.visualDesignGalleryDir, 'title=icelandwaterfall&width=500&height=800.jpg');
let galleryObject = new GalleryEditor_1.default(500, 800, source, target);
//Start--ImgURl
describe('Img Processing using UnitTest', () => {
    it('Success Vaild Img and dimensions)', () => __awaiter(void 0, void 0, void 0, function* () {
        let galleryObject = new GalleryEditor_1.default(500, 800, source, target);
        expect(yield galleryObject.resizeGallery()).toBe(true);
    }));
    it('Valid Gallery with valid source and target)', () => __awaiter(void 0, void 0, void 0, function* () {
        galleryObject = new GalleryEditor_1.default(500, 800, source, target);
        expect(yield galleryObject.resizeGallery()).toBe(true);
    }));
    it('Gallery Resize not throw Error', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield galleryObject.resizeGallery();
        })).not.toThrowError();
    }));
    it('Wrong Target for Gallery', () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidTarget = path_1.default.resolve('wrong path', 'name=fjord&width=500&height=800.jpg');
        galleryObject = new GalleryEditor_1.default(500, 800, source, invalidTarget);
        expect(yield galleryObject.resizeGallery()).toBe(false);
    }));
    it('Invaild dimension', () => __awaiter(void 0, void 0, void 0, function* () {
        galleryObject = new GalleryEditor_1.default(-500, -800, source, target);
        expect(yield galleryObject.resizeGallery()).toBe(false);
    }));
});
//End----ImgURl
//Test-Img-Processing
describe("Test-Img-Processin", () => {
    it("please check gallery url", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/");
        expect(response.status).toBe(200);
    }));
    it("get gallery title", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/gallery?title=icelandwaterfall");
        expect(response.status).toBe(200);
    }));
    it("please check url", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/alaa");
        expect(response.status).toBe(404);
    }));
    it("get gallery title", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/gallery?title=alaa");
        expect(response.status).toBe(404);
    }));
    it("test dimensions", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/gallery?title=icelandwaterfall&height=300&width=500");
        expect(response.status).toBe(200);
    }));
});
//Test-Title
