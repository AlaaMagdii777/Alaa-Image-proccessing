//SuperTest
// import { request } from "express";
import supertest, {Test, Response, SuperTest, } from "supertest";
import server from './../../server'
//Testing Progress
const request: SuperTest<Test> = supertest(server);

//Test-Title
describe("enter gallery title", (): void => {
    it("please check gallery name", async (): Promise<void> => {
      const response: Response = await request.get("/api/gallery");
      expect(response.status).toBe(404);
    });
    it("get gallery title", async (): Promise<void> => {
      const response: Response = await request.get(
        "api/gallery?title=icelandwaterfall"
      );
      expect(response.status).toBe(200);
    });
});

//Test-Title
