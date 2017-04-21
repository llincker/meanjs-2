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
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionActions } from '../../core/actions';
import { UsersService } from '../services/index';
import { User } from '../models/index';
var RegisterComponent = (function () {
    function RegisterComponent(router, usersService, actions) {
        this.router = router;
        this.usersService = usersService;
        this.actions = actions;
        this.model = {};
        this.loading = false;
        this.messageErr = null;
        this.form = this._buildForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.model = new User();
        this.loading = false;
        this.messageErr = null;
    };
    RegisterComponent.prototype.ngOnChange = function (record) {
        // this.model = new User();
        console.log('record:', record);
    };
    RegisterComponent.prototype.register = function (model) {
        var _this = this;
        this.loading = true;
        this.usersService.signup(model)
            .subscribe(function (data) {
            _this.actions.loginUser({ password: model.password, 'usernameOrEmail': model.username });
            _this.router.navigate(['/']);
        }, function (error) {
            _this.loading = false;
            _this.messageErr = JSON.parse(error._body).message;
            console.log(JSON.parse(error._body).message);
        });
    };
    RegisterComponent.prototype._buildForm = function () {
        return new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        UsersService, SessionActions])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/users/register/register.component.js.map