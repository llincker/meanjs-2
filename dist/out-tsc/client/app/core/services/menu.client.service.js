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
var MenuService = (function () {
    function MenuService() {
        this.menus = {};
        this.menuToolBar = {};
        this.defaultRoles = ['user', 'admin'];
        this.addMenu('sideNav', {
            roles: ['*']
        }, this.menus);
        this.addMenu('toolBar', {
            roles: ['*']
        }, this.menuToolBar);
    }
    MenuService.prototype.ngOnInit = function () {
    };
    MenuService.prototype.shouldRender = function (userRoles, itemMenuRoles) {
        if (itemMenuRoles.indexOf('*') !== -1) {
            return true;
        }
        else {
            if (!userRoles) {
                return false;
            }
            for (var userRoleIndex in userRoles) {
                if (userRoles.hasOwnProperty(userRoleIndex)) {
                    for (var roleIndex in itemMenuRoles) {
                        if (itemMenuRoles.hasOwnProperty(roleIndex) && itemMenuRoles[roleIndex] === userRoles[userRoleIndex]) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    ;
    MenuService.prototype.addMenu = function (menuId, options, menus) {
        options = options || {};
        // Create the new menu
        menus[menuId] = {
            roles: options.roles || this.defaultRoles,
            items: options.items || [],
        };
        // Return the menu object
        return menus[menuId];
    };
    ;
    MenuService.prototype.addMenuItem = function (menuId, options) {
        options = options || {};
        this.validateMenuExistence(menuId);
        if (this.validateMenuItemExistence(options.state, menuId, this.menus)) {
            if (this.menus[menuId]) {
                this.menus[menuId].items.push({
                    title: options.title || '',
                    state: options.state || '',
                    icon: options.icon || '',
                    type: options.type || 'item',
                    class: options.class,
                    roles: ((options.roles === null || typeof options.roles === 'undefined') ? this.defaultRoles : options.roles),
                    position: options.position || 0,
                    items: [],
                    shouldRender: this.shouldRender
                });
                return this.menus[menuId];
            }
        }
        else if (this.validateMenuItemExistence(options.state, menuId, this.menuToolBar)) {
            if (this.menuToolBar[menuId]) {
                this.menuToolBar[menuId].items.push({
                    title: options.title || '',
                    state: options.state || '',
                    icon: options.icon || '',
                    type: options.type || 'item',
                    class: options.class,
                    roles: ((options.roles === null || typeof options.roles === 'undefined') ? this.defaultRoles : options.roles),
                    position: options.position || 0,
                    items: [],
                    shouldRender: this.shouldRender
                });
            }
            return this.menuToolBar[menuId];
        }
    };
    ;
    MenuService.prototype.addSubMenuItem = function () { };
    ;
    MenuService.prototype.getMenu = function (menuId) {
        this.validateMenuExistence(menuId);
        // Return the menu object
        return this.menus[menuId] ? this.menus[menuId] : this.menuToolBar[menuId];
    };
    ;
    MenuService.prototype.removeMenu = function () { };
    MenuService.prototype.removeMenuItem = function () { };
    ;
    MenuService.prototype.removeSubMenuItem = function () { };
    MenuService.prototype.validateMenuExistence = function (menuId) {
        if (menuId && menuId.length) {
            if (this.menus[menuId] || this.menuToolBar[menuId]) {
                return true;
            }
            else {
                throw new Error('Menu does not exist');
            }
        }
        else {
            throw new Error('MenuId was not provided');
        }
    };
    MenuService.prototype.validateMenuItemExistence = function (state, menuId, menus) {
        if (menus[menuId]) {
            for (var item in menus[menuId].items) {
                if (menus[menuId].items[item].state === state)
                    return false;
            }
            return true;
        }
        return false;
    };
    return MenuService;
}());
MenuService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], MenuService);
export { MenuService };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/core/services/menu.client.service.js.map