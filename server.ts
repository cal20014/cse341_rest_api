import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";

const app: Express = express();

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/", routes);

const PORT: string | number = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
