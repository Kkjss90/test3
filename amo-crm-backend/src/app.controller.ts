import {Controller, Get, Query} from "@nestjs/common";
import {AppService} from "./app.service";

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('leads')
  async getLeads(@Query('query') query: string) {
    return this.appService.getLeads(query);
  }

  @Get('pipelines')
  async getPipelines() {
    return this.appService.getPipelines();
  }

  @Get('users')
  async getUsers() {
    return this.appService.getUsers();
  }
}
