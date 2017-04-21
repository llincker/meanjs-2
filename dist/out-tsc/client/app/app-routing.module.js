var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// APP COMPONENTS
import { Auth } from './users';
import { HomeComponent } from "./home";
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'user', loadChildren: 'app/users/users.module#UsersModule' },
    { path: 'articles', loadChildren: 'app/articles/articles.module#ArticlesModule' },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(appRoutes, { useHash: true })
        ],
        exports: [
            RouterModule
        ],
        providers: [
            Auth
        ]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/app-routing.module.js.map