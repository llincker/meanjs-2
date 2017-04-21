var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UsersService } from '../../index';
import { SessionActions } from '../../../core/actions';
import { NgRedux } from '@angular-redux/store';
var ProfileComponent = (function () {
    function ProfileComponent(usersService, actions, ngRedux) {
        var _this = this;
        this.usersService = usersService;
        this.actions = actions;
        this.ngRedux = ngRedux;
        this.ngRedux.subscribe(function () {
            _this.state = _this.ngRedux.getState();
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.actions.getProfile();
    };
    ProfileComponent.prototype.saveProfile = function (user) {
        this.actions.editProfile(user);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    }),
    __metadata("design:paramtypes", [UsersService,
        SessionActions, NgRedux])
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/users/settings/profile/profile.component.js.map