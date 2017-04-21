var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
// CORE COMPONENTS
import { AppToolbarComponent, AppSidenavComponent } from "./index";
// REDUX
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
// SERVICES
import { SessionActions, SessionEpics, MenuService, ToggleNavService } from './index';
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    NgModule({
        imports: [
            NgReduxModule,
            RouterModule,
            NgReduxRouterModule,
            Angular2FontAwesomeModule,
            MaterialModule.forRoot(),
            CommonModule
        ],
        declarations: [
            AppToolbarComponent,
            AppSidenavComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
            SessionActions,
            SessionEpics,
            MenuService,
            ToggleNavService
        ],
        exports: [AppToolbarComponent, AppSidenavComponent]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/core/core.module.js.map