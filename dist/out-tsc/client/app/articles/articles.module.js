var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
// ARTICLES COMPONENTS
import { ArticlesComponent, ArticlesListComponent, ArticleDetailsComponent, ArticleComponent } from './index';
// ARTICLES SERVICES
import { ArticlesService } from './index';
// ARTICLE CONFIG
// import { ArticlesConfig, articlesFactory } from './index';
// ARTICLES ROUTES
// import { ARTICLES_ROUTES } from './index';
import { ArticlesRoutingModule } from "./articles-routing.module";
var ArticlesModule = (function () {
    function ArticlesModule() {
    }
    return ArticlesModule;
}());
ArticlesModule = __decorate([
    NgModule({
        imports: [
            // ARTICLES_ROUTES,
            CommonModule,
            MaterialModule,
            ArticlesRoutingModule
        ],
        declarations: [
            ArticlesComponent,
            ArticlesListComponent,
            ArticleDetailsComponent,
            ArticleComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [OverlayContainer, ArticlesService],
    })
], ArticlesModule);
export { ArticlesModule };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/articles/articles.module.js.map