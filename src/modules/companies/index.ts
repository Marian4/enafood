import { CompaniesRepository } from "./repositories/implementations/CompaniesRepository";
import { CompaniesController } from "./CompaniesController";
import { CompaniesService } from "./CompaniesService";

const companiesRepository = CompaniesRepository.getInstance();
const companiesService = new CompaniesService(companiesRepository)
const companiesController = new CompaniesController(companiesService);

export { companiesController };
