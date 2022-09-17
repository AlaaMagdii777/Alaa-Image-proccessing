import express from "express";
import { Request, Response, Application } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import routes from "./src/routes/api/gallery";

const app = express();
const server: Application = express();
dotenv.config();

const SERVER_PORT = (process.env.SERVER_PORT as unknown as number) || 8080;

server.use(morgan("dev"));

server.use("/api/gallery", routes);

// Url-Welcome-Alaa
server.get("/", (req: Request, res: Response): void => {
  res.send("<span>Welcome Alaa Magdy</span>");
});

//Error-404-notFound

app.get("*", function(res: Response){
    res.status(404).send("what??!! not found");
  });

//Error-500-

server.use((err: Error,req: Request,res: Response, ): void => {
      res.status(500).json({ Errors: err.stack });
    }
  );
server.listen(SERVER_PORT, (): void => {
    console.log(`Welcome Alaa Server runs well! on port ${SERVER_PORT}`); 
  });
  
  export default server;