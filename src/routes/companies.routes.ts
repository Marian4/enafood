import { Router } from "express";

import { companiesController } from "../modules/companies";

const companiesRoutes = Router();

companiesRoutes.post("/", (request, response) =>
  companiesController.create(request, response)
);

companiesRoutes.patch("/:company_id", (request, response) =>
    companiesController.update(request, response)
);

companiesRoutes.delete("/:company_id", (request, response) =>
    companiesController.delete(request, response)
);

companiesRoutes.get("/:company_id", (request, response) =>
    companiesController.findOne(request, response)
);

companiesRoutes.get("/", (request, response) =>
    companiesController.findAll(request, response)
);

export { companiesRoutes };
