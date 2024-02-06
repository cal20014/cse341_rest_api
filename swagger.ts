const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API",
    description: "API documentation",
  },
  host: "localhost:8080",
  basePath: "/",
  schemes: ["https", "http"],
};
const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
