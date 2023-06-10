import { Router } from "express";

import { usersController } from "../modules/users";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) =>
  usersController.create(request, response)
);

usersRoutes.patch("/:user_id", (request, response) =>
    usersController.update(request, response)
);

usersRoutes.delete("/:user_id", (request, response) =>
    usersController.delete(request, response)
);

usersRoutes.get("/:user_id", (request, response) =>
    usersController.findOne(request, response)
);

usersRoutes.get("/", (request, response) =>
    usersController.findAll(request, response)
);

export { usersRoutes };
