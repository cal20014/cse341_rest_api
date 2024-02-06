"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swaggerRoutes_1 = __importDefault(require("./swaggerRoutes"));
const routes = express_1.default.Router();
routes.use("/", swaggerRoutes_1.default);
exports.default = routes;
