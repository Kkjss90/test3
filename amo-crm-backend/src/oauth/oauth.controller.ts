import { Controller, Get, Query, Req, Redirect } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { Request } from 'express';

@Controller('oauth2')
export class OauthController {
    @Get('callback')
    @Redirect()
    async callback() {
        return { url: '/' };
    }
}
