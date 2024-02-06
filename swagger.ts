import swaggerAutogen from "swagger-autogen";

const swaggerAutogenInstance = swaggerAutogen();

const doc = {
  info: {
    title: "API",
    description: "API documentation",
  },
  host: "localhost:8080",
  basePath: "/",
  schemes: ["https", "http"],
};

const outputFile: string = "./swagger.json";
const endpointsFiles: string[] = ["./server.ts"];

swaggerAutogenInstance(outputFile, endpointsFiles, doc);
