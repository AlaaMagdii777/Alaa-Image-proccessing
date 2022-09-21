//SuperTest
import supertest, { Test, Response, SuperTest } from "supertest";
import server from "../../server";
//Testing Path
import path from "path";
// import resizeGallery from "./../routes/GalleryEditor"
import GalleryEditor from "./../routes/GalleryEditor";
const request: SuperTest<Test> = supertest(server);

//Img Testing

export const galleryDir = path.resolve(__dirname, "./../galleries/full");

export const visualDesignGalleryDir = path.resolve(
  __dirname,
  "./../galleries/visualDesignGallery"
);
//Source Gallery
const source = path.resolve(galleryDir, "icelandwaterfall.jpg");
//Target title with dimensions
const target = path.resolve(
  visualDesignGalleryDir,
  "title=icelandwaterfall&width=500&height=800.jpg"
);
let galleryObject: GalleryEditor = new GalleryEditor(500, 800, source, target);

//Start--ImgURl
describe("Img Processing using UnitTest", (): void => {
  it("Success Vaild Img and dimensions)", async (): Promise<void> => {
    let galleryObject: GalleryEditor = new GalleryEditor(
      500,
      800,
      source,
      target
    );
    expect(await galleryObject.resizeGallery()).toBe(true);
  });
  it("Valid Gallery with valid source and target)", async (): Promise<void> => {
    galleryObject = new GalleryEditor(500, 800, source, target);
    expect(await galleryObject.resizeGallery()).toBe(true);
  });

  it("Gallery Resize not throw Error", async (): Promise<void> => {
    expect(async () => {
      await galleryObject.resizeGallery();
    }).not.toThrowError();
  });

  it("Wrong Target for Gallery", async (): Promise<void> => {
    const invalidTarget = path.resolve(
      "wrong path",
      "name=icelandwaterfall&width=500&height=800.jpg"
    );
    galleryObject = new GalleryEditor(500, 800, source, invalidTarget);
    expect(await galleryObject.resizeGallery()).toBe(false);
  });

  it("Invaild dimension", async (): Promise<void> => {
    galleryObject = new GalleryEditor(-500, -800, source, target);
    expect(await galleryObject.resizeGallery()).toBe(false);
  });
});
//End----ImgURl

//Test-Img-Processing
describe("Test-Img-Processin", (): void => {
  it("please check gallery url", async (): Promise<void> => {
    const response: Response = await request.get("/");
    expect(response.status).toBe(200);
  });
  it("get gallery title", async (): Promise<void> => {
    const response: Response = await request.get(
      "/api/gallery?title=icelandwaterfall"
    );
    expect(response.status).toBe(200);
  });

  it("please check url", async (): Promise<void> => {
    const response: Response = await request.get("/alaa");
    expect(response.status).toBe(404);
  });
  it("get gallery title", async (): Promise<void> => {
    const response: Response = await request.get("/api/gallery?title=alaa");
    expect(response.status).toBe(404);
  });

  it("test dimensions", async (): Promise<void> => {
    const response: Response = await request.get(
      "/api/gallery?title=icelandwaterfall&height=300&width=500"
    );
    expect(response.status).toBe(200);
  });
});

//Test-Title
