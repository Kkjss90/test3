import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getLeads(query: string): Promise<any>;
    getPipelines(): Promise<any>;
    getUsers(): Promise<any>;
}
