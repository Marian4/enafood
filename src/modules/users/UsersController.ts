import { Response, Request } from "express";

import { UsersService } from "./UsersService";

class UsersController {
  constructor(private usersService: UsersService) {}

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.usersService.create(request.body);
      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async findAll(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.usersService.findAll();
      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async findOne(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.usersService.findOne(request.params.user_id);
      
      if (!user) throw new Error ("User not found")

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const userExists = await this.usersService.findOne(request.params.user_id);
      
      if (!userExists) throw new Error ("User not found")

      const user = await this.usersService.update(request.params.user_id, request.body);

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const userExists = await this.usersService.findOne(request.params.user_id);
      
      if (!userExists) throw new Error ("User not found")
      
      await this.usersService.delete(request.params.user_id)

      return response.status(200).json()
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UsersController };
