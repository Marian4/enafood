import { User } from "../../model/User";
import UserModel from "../../../../db/models/User.model";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

  private static INSTANCE: UsersRepository;

  private constructor() {
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  async create(data: ICreateUserDTO): Promise<User> {
    return await UserModel.create(data);
  }

  async findOne(id: string): Promise<User> | undefined {
    return await UserModel.findById(id);
  }

  async findByEmail(email: string): Promise<User> | undefined {
    return await UserModel.findOne({email});
  }

  async findAll(): Promise<User[]> {
    return await UserModel.find();
  }

  async update(id: string, data: Partial<ICreateUserDTO>): Promise<User> {
    return await UserModel.findOneAndUpdate({_id: id}, {...data, updated_at: new Date()}, { returnOriginal: false })
  }

  async delete(id:string): Promise<void> {
    await UserModel.deleteOne({_id: id})
  }
}

export { UsersRepository };
