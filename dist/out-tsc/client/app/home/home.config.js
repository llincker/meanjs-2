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
import { MenuService } from '../core/services/menu.client.service';
var HomeConfig = (function () {
    function HomeConfig(menuService) {
        this.menuService = menuService;
    }
    HomeConfig.prototype.addMenu = function () {
        this.menuService.addMenuItem('sideNav', {
            state: 'home',
            title: 'Home',
            icon: 'fa-home',
            roles: ['*']
        });
    };
    return HomeConfig;
}());
HomeConfig = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MenuService])
], HomeConfig);
export { HomeConfig };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/home/home.config.js.map