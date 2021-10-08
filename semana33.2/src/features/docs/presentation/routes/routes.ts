import { Router } from "express";
import swaggerFile from "./../../../../../src/swagger_documentation.json";
import swaggerUi from "swagger-ui-express";

export default class DocRoutes {
  public init(routes: Router): Router {
    routes.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    return routes;
  }
}
