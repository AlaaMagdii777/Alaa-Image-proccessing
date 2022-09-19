//SuperTest
import supertest, {Test, Response, SuperTest, } from "supertest";
import server from '../../server'
//Testing Progress
const request: SuperTest<Test> = supertest(server);

//Test-Img-Processing
describe("Test-Img-Processin", (): void => {
    it("please check gallery url", async (): Promise<void> => {
      const response: Response = await request.get("/api/gallery");
      expect(response.status).toBe(404);
    });
    it("get gallery title", async (): Promise<void> => {
      const response: Response = await request.get(
        "api/gallery?title=icelandwaterfall"
      );
      expect(response.status).toBe(200);
    });

    it("please check url", async (): Promise<void> => {
      const response: Response = await request.get("/alaa");
      expect(response.status).toBe(404);
    });
    it("get gallery title", async (): Promise<void> => {
      const response: Response = await request.get(
        "api/gallery?title=alaa"
      );
      expect(response.status).toBe(404);
    });

    it("test dimensions", async (): Promise<void> => {
      const response: Response = await request.get(
        "http://localhost:3000/api/gallery?title=icelandwaterfall&height=300&width=500"
      );
      expect(response.status).toBe(200);
    });
    it("test dimensions when put somthing minus", async (): Promise<void> => {
      const response: Response = await request.get(
        "http://localhost:3000/api/gallery?title=icelandwaterfall&height=-300&width=500"
      );
      expect(response.status).toBe(404);
    });
});

//Test-Title
