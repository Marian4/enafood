import { UsersRepository } from "./repositories/implementations/UsersRepository";
import { UsersController } from "./UsersController";
import { UsersService } from "./UsersService";

const usersRepository = UsersRepository.getInstance();
const usersService = new UsersService(usersRepository)
const usersController = new UsersController(usersService);

export { usersController };
