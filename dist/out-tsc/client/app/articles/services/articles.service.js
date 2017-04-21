var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from "../../../environments/environment";
import { Http } from '@angular/http';
var ArticlesService = (function () {
    function ArticlesService(http) {
        this.http = http;
        this._baseUrl = environment.backend.protocol + "://" + environment.backend.host;
        if (environment.backend.port) {
            this._baseUrl += ":" + environment.backend.port;
        }
    }
    ArticlesService.prototype.getArticles = function () {
        var backendURL = "" + this._baseUrl + environment.backend.endpoints.articles;
        return this.http.get(backendURL).map(function (response) { return response.json(); });
    };
    ArticlesService.prototype.getArticle = function (id_article) {
        var backendURL = "" + this._baseUrl + environment.backend.endpoints.articles + "/" + id_article;
        return this.http.get(backendURL).map(function (response) { return response.json(); });
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ArticlesService);
export { ArticlesService };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/articles/services/articles.service.js.map