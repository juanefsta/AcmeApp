import { Request, Response, Router } from "express";
import { DeveloperService } from "../services/developer.service";

export class DeveloperController {
  public router= Router();
  
  constructor(private developerService: DeveloperService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/", this.getAll);
  }

  private getAll = async (_: Request, res: Response) => {
    try {
      const developer = await this.developerService.getAll();
      res.send(developer);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}