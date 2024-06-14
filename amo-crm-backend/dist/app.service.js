"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const oauth_service_1 = require("./oauth/oauth.service");
let AppService = class AppService {
    constructor(httpService, oauthService) {
        this.httpService = httpService;
        this.oauthService = oauthService;
    }
    async getLeads(query) {
        const url = 'https://sasha170804.amocrm.ru/api/v4/leads';
        const config = {
            headers: {
                Authorization: `Bearer ${this.oauthService.token}`,
            },
            params: query ? { query } : {},
        };
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(url, config));
        return response.data;
    }
    async getPipelines() {
        const url = 'https://sasha170804.amocrm.ru/api/v4/leads/pipelines';
        const config = {
            headers: {
                Authorization: `Bearer ${this.oauthService.token}`,
            },
        };
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(url, config));
        return response.data;
    }
    async getUsers() {
        const url = 'https://sasha170804.amocrm.ru/api/v4/users';
        const config = {
            headers: {
                Authorization: `Bearer ${this.oauthService.token}`,
            },
        };
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(url, config));
        return response.data;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService, oauth_service_1.OauthService])
], AppService);
//# sourceMappingURL=app.service.js.map