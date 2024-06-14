import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OauthService } from './oauth.service';
import { OauthController } from './oauth.controller';

@Module({
  imports: [HttpModule],
  providers: [OauthService],
  controllers: [OauthController],
  exports: [OauthService],
})
export class OauthModule {}
