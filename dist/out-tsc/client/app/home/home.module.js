var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
import { HOME_ROUTES } from './index';
// HOME COMPONENT
import { HomeComponent } from './index';
import { HomeConfig } from './index';
export function homeFactory(config) {
    return function () { return config.addMenu(); };
}
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    NgModule({
        imports: [
            HOME_ROUTES,
            MaterialModule.forRoot(),
            CommonModule
        ],
        declarations: [
            HomeComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [HomeConfig, OverlayContainer,
            { provide: APP_INITIALIZER, useFactory: homeFactory, deps: [HomeConfig], multi: true }
        ],
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/home/home.module.js.map