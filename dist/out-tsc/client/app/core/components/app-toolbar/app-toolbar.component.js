var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
import { ToggleNavService, MenuService } from '../../services';
import { SessionActions } from '../../actions';
var AppToolbarComponent = AppToolbarComponent_1 = (function () {
    function AppToolbarComponent(router, menuService, route, actions, ngRedux, ToggleNavService) {
        this.router = router;
        this.menuService = menuService;
        this.route = route;
        this.actions = actions;
        this.ngRedux = ngRedux;
        this.ToggleNavService = ToggleNavService;
        this.isNormalScreen = true;
        this.menuList = [];
        this.state = this.ngRedux.getState();
        this.menuList = menuService.getMenu('toolBar').items;
    }
    /* SideNav toggle operation*/
    AppToolbarComponent.prototype.toggleNav = function () {
        this.ToggleNavService.toggle();
    };
    AppToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngRedux.subscribe(function () {
            _this.state = _this.ngRedux.getState();
        });
        //subscribe toggle service
        this.subscription = this.ToggleNavService.toggle().subscribe(function (toggled) {
            _this.isToggled = toggled;
        });
    };
    AppToolbarComponent.prototype.logout = function () {
        this.actions.logoutUser();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([this.returnUrl]);
    };
    AppToolbarComponent.isLoggedIn = function (s) { return s.session.token; };
    AppToolbarComponent.isLoggedOut = function (s) { return !s.session.token; };
    return AppToolbarComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], AppToolbarComponent.prototype, "titleToolbar", void 0);
__decorate([
    select(AppToolbarComponent_1.isLoggedIn),
    __metadata("design:type", Observable)
], AppToolbarComponent.prototype, "loggedIn$", void 0);
__decorate([
    select(AppToolbarComponent_1.isLoggedOut),
    __metadata("design:type", Observable)
], AppToolbarComponent.prototype, "loggedOut$", void 0);
AppToolbarComponent = AppToolbarComponent_1 = __decorate([
    Component({
        selector: 'app-app-toolbar',
        templateUrl: './app-toolbar.component.html',
        styleUrls: ['./app-toolbar.component.scss']
    }),
    __metadata("design:paramtypes", [Router, MenuService, ActivatedRoute,
        SessionActions, NgRedux, ToggleNavService])
], AppToolbarComponent);
export { AppToolbarComponent };
var AppToolbarComponent_1;
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/core/components/app-toolbar/app-toolbar.component.js.map