import { Request, Response, Router } from "express";
import { LoginService } from "../services/login.service";

export class LoginController {
  public router= Router();
  
  constructor(private loginService: LoginService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/", this.sayHello);
  }

  private sayHello = (_: Request, res: Response) => {
    const welcomeMessage = this.loginService.getWelcomeMessage();
    res.send(welcomeMessage);
  };
}