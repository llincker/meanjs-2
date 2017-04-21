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
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute } from '@angular/router';
var ArticleDetailsComponent = (function () {
    function ArticleDetailsComponent(articlesService, route) {
        this.articlesService = articlesService;
        this.route = route;
        this.article = {};
    }
    ArticleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.articlesService.getArticle(params['id']).subscribe(function (data) {
                    console.log(data);
                    _this.article = data;
                });
            }
        });
    };
    return ArticleDetailsComponent;
}());
ArticleDetailsComponent = __decorate([
    Component({
        templateUrl: './article-details.component.html',
        styleUrls: ['./article-details.component.css']
    }),
    __metadata("design:paramtypes", [ArticlesService, ActivatedRoute])
], ArticleDetailsComponent);
export { ArticleDetailsComponent };
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/articles/components/article-details.component.js.map