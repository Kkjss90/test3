import { HttpService } from '@nestjs/axios';
import { OauthService } from './oauth/oauth.service';
export declare class AppService {
    private httpService;
    private oauthService;
    constructor(httpService: HttpService, oauthService: OauthService);
    getLeads(query?: string): Promise<any>;
    getPipelines(): Promise<any>;
    getUsers(): Promise<any>;
}
