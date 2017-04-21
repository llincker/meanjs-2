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
import { UsersService } from './users.service';
import { NgRedux } from '@angular-redux/store';
var Auth = (function () {
    function Auth(usersService, ngRedux) {
        this.usersService = usersService;
        this.ngRedux = ngRedux;
        this.userRoles = [];
    }
    Auth.prototype.canActivate = function (route) {
        this.userRoles = JSON.parse(JSON.stringify(this.ngRedux.getState())).session.user.roles;
        if (route.data.roles.indexOf('*') !== -1) {
            return true;
        }
        else {
            if (!this.userRoles) {
                return false;
            }
            for (var userRoleIndex in this.userRoles) {
                if (this.userRoles.hasOwnProperty(userRoleIndex)) {
                    for (var roleIndex in route.data.roles) {
                        if (route.data.roles.hasOwnProperty(roleIndex) && route.data.roles[roleIndex] === this.userRoles[userRoleIndex]) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    Auth.prototype.canActivateChild = function (route) {
        return this.canActivate(route);
    };
    return Auth;
}());
Auth = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [UsersService,
        NgRedux])
], Auth);
export { Auth };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/users/services/auth.service.js.map