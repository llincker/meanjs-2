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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionActions } from '../../../core/actions';
import { NgRedux } from '@angular-redux/store';
var PasswordComponent = (function () {
    function PasswordComponent(actions, ngRedux) {
        var _this = this;
        this.actions = actions;
        this.ngRedux = ngRedux;
        this.ngRedux.subscribe(function () {
            _this.state = _this.ngRedux.getState();
            console.log('state', _this.state);
        });
        this.form = this._buildForm();
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent.prototype._buildForm = function () {
        return new FormGroup({
            currentPassword: new FormControl('', Validators.required),
            newPassword: new FormControl('', Validators.required),
            verifyPassword: new FormControl('', Validators.required)
        });
    };
    PasswordComponent.prototype.changePasword = function (value) {
        this.actions.changePassword(value);
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    Component({
        selector: 'app-password',
        templateUrl: './password.component.html',
        styleUrls: ['./password.component.css']
    }),
    __metadata("design:paramtypes", [SessionActions, NgRedux])
], PasswordComponent);
export { PasswordComponent };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/users/settings/password/password.component.js.map