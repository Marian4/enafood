import { Company } from "./model/Company";
import { ICompaniesRepository } from "./repositories/ICompaniesRepository";

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
  phone_number: string;
  cnpj: string;
  addresses: IAddress[];
}

class CompaniesService {
  constructor(private companiesRepository: ICompaniesRepository) {}

  async create(data: IRequest): Promise<Company> {
    const companyAlreadyExists = await this.companiesRepository.findByEmail(data.email);

    if (companyAlreadyExists) throw new Error("Company already exists");

    const company = await this.companiesRepository.create(data);

    return company;
  }

  async findAll(): Promise<Company[]> {
    const companies = await this.companiesRepository.findAll();

    return companies
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.companiesRepository.findOne(id);

    return company
  }

  async update(id: string, data: Partial<IRequest>): Promise<Company> {
    const company = await this.companiesRepository.update(id, data);

    return company
  }

  async delete(id: string): Promise<void> {
    await this.companiesRepository.delete(id);
  }

}

export { CompaniesService };
