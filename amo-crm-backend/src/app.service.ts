import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { OauthService } from './oauth/oauth.service';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService, private oauthService: OauthService) {}

  async getLeads(query?: string) {
    const url = 'https://sasha170804.amocrm.ru/api/v4/leads'; // Замените на ваш домен amoCRM
    const config = {
      headers: {
        Authorization: `Bearer ${this.oauthService.token}`,
      },
      params: query ? { query } : {},
    };

    const response = await lastValueFrom(this.httpService.get(url, config));
    return response.data;
  }

  async getPipelines() {
    const url = 'https://sasha170804.amocrm.ru/api/v4/leads/pipelines'; // Замените на ваш домен amoCRM
    const config = {
      headers: {
        Authorization: `Bearer ${this.oauthService.token}`,
      },
    };

    const response = await lastValueFrom(this.httpService.get(url, config));
    return response.data;
  }

  async getUsers() {
    const url = 'https://sasha170804.amocrm.ru/api/v4/users'; // Замените на ваш домен amoCRM
    const config = {
      headers: {
        Authorization: `Bearer ${this.oauthService.token}`,
      },
    };

    const response = await lastValueFrom(this.httpService.get(url, config));
    return response.data;
  }
}
