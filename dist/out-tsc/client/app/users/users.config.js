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
var UsersConfig = (function () {
    function UsersConfig(menuService) {
        this.menuService = menuService;
    }
    UsersConfig.prototype.addMenu = function () {
        this.menuService.addMenuItem('toolBar', {
            state: '#/list-users',
            title: 'User list',
            icon: 'fa-list',
            roles: ['admin'],
        });
    };
    return UsersConfig;
}());
UsersConfig = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MenuService])
], UsersConfig);
export { UsersConfig };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/users/users.config.js.map