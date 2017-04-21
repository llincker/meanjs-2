var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// ARTICLES COMPONENTS
import { ArticlesComponent, ArticlesListComponent, ArticleDetailsComponent } from './components';
import { Auth } from '../users';
var articlesRoutes = [{
        path: '',
        component: ArticlesComponent,
        canActivate: [Auth],
        data: {
            roles: ['user', 'admin']
        },
        children: [{
                path: '',
                component: ArticlesListComponent
            },
            {
                path: 'article/:id',
                component: ArticleDetailsComponent
            }]
    }
];
var ArticlesRoutingModule = (function () {
    function ArticlesRoutingModule() {
    }
    return ArticlesRoutingModule;
}());
ArticlesRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(articlesRoutes)
        ],
        exports: [
            RouterModule
        ]
    })
], ArticlesRoutingModule);
export { ArticlesRoutingModule };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/articles/articles-routing.module.js.map