import { Company } from "../../model/Company";
import CompanyModel from "../../../../db/models/Company.model";
import { ICompaniesRepository, ICreateCompanyDTO } from "../ICompaniesRepository";

class CompaniesRepository implements ICompaniesRepository {

  private static INSTANCE: CompaniesRepository;

  private constructor() {
  }

  public static getInstance(): CompaniesRepository {
    if (!CompaniesRepository.INSTANCE) {
      CompaniesRepository.INSTANCE = new CompaniesRepository();
    }

    return CompaniesRepository.INSTANCE;
  }

  async create(data: ICreateCompanyDTO): Promise<Company> {
    return await CompanyModel.create(data);
  }

  async findOne(id: string): Promise<Company> | undefined {
    return await CompanyModel.findById(id);
  }

  async findByEmail(email: string): Promise<Company> | undefined {
    return await CompanyModel.findOne({email});
  }

  async findAll(): Promise<Company[]> {
    return await CompanyModel.find();
  }

  async update(id: string, data: Partial<ICreateCompanyDTO>): Promise<Company> {
    return await CompanyModel.findOneAndUpdate({_id: id}, {...data, updated_at: new Date()}, { returnOriginal: false })
  }

  async delete(id:string): Promise<void> {
    await CompanyModel.deleteOne({_id: id})
  }
}

export { CompaniesRepository };
