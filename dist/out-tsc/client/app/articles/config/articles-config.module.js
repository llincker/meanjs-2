var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { MenuService } from 'app/core/services/menu.client.service';
var ArticlesConfig = (function () {
    function ArticlesConfig(menuService) {
        this.menuService = menuService;
    }
    ArticlesConfig.prototype.addMenu = function () {
        this.menuService.addMenuItem('sideNav', {
            state: 'articles',
            title: 'Articles',
            icon: 'fa-file',
            roles: ['user', 'admin'],
        });
    };
    return ArticlesConfig;
}());
ArticlesConfig = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MenuService])
], ArticlesConfig);
export { ArticlesConfig };
export function articlesFactory(config) {
    return function () { return config.addMenu(); };
}
var ArticlesConfigModule = ArticlesConfigModule_1 = (function () {
    function ArticlesConfigModule() {
    }
    ArticlesConfigModule.forRoot = function () {
        return {
            ngModule: ArticlesConfigModule_1,
            providers: [{ provide: APP_INITIALIZER, useFactory: articlesFactory, deps: [ArticlesConfig], multi: true }]
        };
    };
    return ArticlesConfigModule;
}());
ArticlesConfigModule = ArticlesConfigModule_1 = __decorate([
    NgModule({
        providers: [ArticlesConfig]
    })
], ArticlesConfigModule);
export { ArticlesConfigModule };
var ArticlesConfigModule_1;
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/articles/config/articles-config.module.js.map