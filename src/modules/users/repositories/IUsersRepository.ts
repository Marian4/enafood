import { User } from "../model/User";

interface IAddress {
    street: string;
    neighborhood: string;
    number: number;
    complement?: string;
    city: string;
    state: string;
    zip_code: number;
}

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    age: number;
    addresses: IAddress[];
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findOne(id: string): Promise<User> | undefined;
  findByEmail(email: string): Promise<User> | undefined;
  findAll(): Promise<User[]>;
  update(id: string, data: Partial<ICreateUserDTO>): Promise<User>;
  delete(id: string): Promise<void>
}

export { IUsersRepository, ICreateUserDTO };
