import { Response, Request } from "express";

import { CompaniesService } from "./CompaniesService";

class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const company = await this.companiesService.create(request.body);
      return response.status(201).json(company);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async findAll(request: Request, response: Response): Promise<Response> {
    try {
      const companies = await this.companiesService.findAll();
      return response.status(200).json(companies);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async findOne(request: Request, response: Response): Promise<Response> {
    try {
      const company = await this.companiesService.findOne(request.params.company_id);
      
      if (!company) throw new Error ("Company not found")

      return response.status(200).json(company);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const companyExists = await this.companiesService.findOne(request.params.company_id);
      
      if (!companyExists) throw new Error ("Company not found")

      const company = await this.companiesService.update(request.params.company_id, request.body);

      return response.status(200).json(company);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const companyExists = await this.companiesService.findOne(request.params.company_id);
      
      if (!companyExists) throw new Error ("Company not found")
      
      await this.companiesService.delete(request.params.company_id)

      return response.status(200).json()
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CompaniesController };
