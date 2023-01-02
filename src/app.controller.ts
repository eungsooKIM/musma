import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

type ResponseType = {
  type: string;
  data: string;
};

type PostBodyType = {
  data: string;
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }

  @Get("/get")
  public getRequest(): ResponseType {
    return { type: "GET", data: "getResponse" };
  }

  @Post("/post")
  public postRequest(@Body() body: PostBodyType): ResponseType {
    return { type: "POST", data: body.data };
  }
}
