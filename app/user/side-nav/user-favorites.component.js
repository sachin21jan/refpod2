"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_jobs_service_1 = require('../services/user-jobs.service');
var UserFavoritesComponent = (function () {
    function UserFavoritesComponent(_userJobsService) {
        this._userJobsService = _userJobsService;
    }
    UserFavoritesComponent.prototype.ngOnInit = function () {
        this.favorites = this._userJobsService.getFavorites();
    };
    UserFavoritesComponent = __decorate([
        core_1.Component({
            selector: 'user-favorites',
            templateUrl: 'app/user/side-nav/user-favorites.component.html'
        }), 
        __metadata('design:paramtypes', [user_jobs_service_1.UserJobsService])
    ], UserFavoritesComponent);
    return UserFavoritesComponent;
}());
exports.UserFavoritesComponent = UserFavoritesComponent;
//# sourceMappingURL=user-favorites.component.js.map