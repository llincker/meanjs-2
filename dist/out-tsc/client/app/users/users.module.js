var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { InterceptedHttp } from "./services/interceptors/http.interceptor";
// LOGIN COMPONENTS
import { LoginComponent, RegisterComponent, SettingsComponent, ProfileComponent, PasswordComponent, ListComponent, EqualValidator } from './index';
// LOGIN ROUTES
import { USERS_ROUTES } from './index';
// LOGIN SERVICES 
import { UsersConfig, UsersService, Auth, AuthInterceptor } from './index';
export function usersFactory(config) {
    return function () { return config.addMenu(); };
}
export function httpFactory(xhrBackend, requestOptions) {
    return new InterceptedHttp(xhrBackend, requestOptions);
}
var UsersModule = UsersModule_1 = (function () {
    function UsersModule() {
    }
    UsersModule.forRoot = function () {
        return {
            ngModule: UsersModule_1,
            providers: [Auth, AuthInterceptor]
        };
    };
    return UsersModule;
}());
UsersModule = UsersModule_1 = __decorate([
    NgModule({
        imports: [
            USERS_ROUTES,
            MaterialModule.forRoot(),
            FormsModule,
            ReactiveFormsModule,
            CommonModule
        ],
        declarations: [
            LoginComponent,
            RegisterComponent,
            SettingsComponent,
            ProfileComponent,
            PasswordComponent,
            EqualValidator,
            ListComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [UsersConfig, UsersService,
            { provide: APP_INITIALIZER, useFactory: usersFactory, deps: [UsersConfig], multi: true },
            { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] }
        ],
    })
], UsersModule);
export { UsersModule };
var UsersModule_1;
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/users/users.module.js.map