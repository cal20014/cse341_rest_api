import express from "express";
import swaggerRoutes from "./swaggerRoutes";

const routes = express.Router();

routes.use("/", swaggerRoutes);

export default routes;
