import { User } from "./model/User";
import { IUsersRepository } from "./repositories/IUsersRepository";

interface IAddress {
    street: string;
    neighborhood: string;
    number: number;
    complement?: string;
    city: string;
    state: string;
    zip_code: number;
}

interface IRequest {
  name: string;
  email: string;
  password: string;
  age: number;
  addresses: IAddress[];
}

class UsersService {
  constructor(private usersRepository: IUsersRepository) {}

  async create(data: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) throw new Error("User already exists");

    const user = await this.usersRepository.create(data);

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.findAll();

    return users
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id);

    return user
  }

  async update(id: string, data: Partial<IRequest>): Promise<User> {
    const user = await this.usersRepository.update(id, data);

    return user
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

}

export { UsersService };
