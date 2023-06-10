import {Company } from "../model/Company";

interface IAddress {
    street: string;
    neighborhood: string;
    number: number;
    complement?: string;
    city: string;
    state: string;
    zip_code: number;
}

interface ICreateCompanyDTO {
    name: string;
    email: string;
    password: string;
    phone_number: string;
    cnpj: string;
    addresses: IAddress[];
}

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  findOne(id: string): Promise<Company> | undefined;
  findByEmail(email: string): Promise<Company> | undefined;
  findAll(): Promise<Company[]>;
  update(id: string, data: Partial<ICreateCompanyDTO>): Promise<Company>;
  delete(id: string): Promise<void>
}

export { ICompaniesRepository, ICreateCompanyDTO };
