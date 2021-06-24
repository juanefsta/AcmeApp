import { Request, Response, Router } from "express";
import { DeveloperService } from "../services/developer.service";

export class DeveloperController {
  public router= Router();
  
  constructor(private developerService: DeveloperService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/", this.getAll);
    this.router.post("/", this.addDeveloper);
    this.router.put("/disable", this.disable);
    this.router.put("/", this.editDeveloper);
    this.router.post("/asset", this.addAsset);
    // this.router.delete("/asset/:id", this.deleteAsset);
    // this.router.post("/license", this.addlicense);
    // this.router.delete("/license/:id", this.deleteLicense);
  }

  private getAll = async (_: Request, res: Response) => {
    try {
      const developer = await this.developerService.getAll();
      res.send(developer);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  private addDeveloper = async (req: Request, res: Response) => {
    try {
      const addResult = await this.developerService.add(req.body);
      res.send(addResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  private editDeveloper = async (req: Request, res: Response) => {
    try {
      const addResult = await this.developerService.edit(req.body);
      res.send(addResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
  
  private addAsset = async (req: Request, res: Response) => {
    try {
      const addResult = await this.developerService.addAsset(req.body);
      res.send(addResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  // private delete = async (req: Request, res: Response) => {
  //   try {
      
  //     const addResult = await this.developerService.deleteAsset(
  //       req.params.id
  //     );
  //     res.send(addResult);
  //   } catch (e) {
  //     res.status(500).send(e.message);
  //   }
  // };

  // private deleteAsset = async (req: Request, res: Response) => {
  //   try {
  //     const addResult = await this.developerService.deleteAsset(req.body);
  //     res.send(addResult);
  //   } catch (e) {
  //     res.status(500).send(e.message);
  //   }
  // };

  // private addlicense = async (req: Request, res: Response) => {
  //   try {
  //     const addResult = await this.developerService.addlicense(req.body);
  //     res.send(addResult);
  //   } catch (e) {
  //     res.status(500).send(e.message);
  //   }
  // };

  // private deleteLicense = async (req: Request, res: Response) => {
  //   try {
  //     const addResult = await this.developerService.deleteLicense(req.body);
  //     res.send(addResult);
  //   } catch (e) {
  //     res.status(500).send(e.message);
  //   }
  // };

  private disable = async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const disableResult = await this.developerService.disable(req.body);
      console.log(disableResult);
      res.send(disableResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}