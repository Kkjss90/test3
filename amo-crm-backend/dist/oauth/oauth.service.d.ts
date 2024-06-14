import { HttpService } from '@nestjs/axios';
export declare class OauthService {
    private httpService;
    private accessToken;
    constructor(httpService: HttpService);
    get token(): string;
}
