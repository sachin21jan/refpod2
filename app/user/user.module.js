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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
//Custom modules
var shared_module_1 = require('../shared/shared.module');
//Components
var user_home_component_1 = require('./user-home.component');
var user_navbar_component_1 = require('./user-navbar.component');
var user_profile_component_1 = require('./profile/user-profile.component');
var user_friends_component_1 = require('./friends/user-friends.component');
var user_jobs_component_1 = require('./jobs/user-jobs.component');
var user_account_component_1 = require('./side-nav/user-account.component');
var user_favorites_component_1 = require('./side-nav/user-favorites.component');
var user_sidenav_component_1 = require('./side-nav/user-sidenav.component');
var user_jobs_service_1 = require('./services/user-jobs.service');
//Routing
var user_routing_1 = require('./user.routing');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                shared_module_1.SharedModule,
                user_routing_1.UserRouting
            ],
            declarations: [
                user_home_component_1.UserHomeComponent,
                user_navbar_component_1.UserNavbarComponent,
                user_profile_component_1.UserProfileComponent,
                user_friends_component_1.UserFriendsComponent,
                user_jobs_component_1.UserJobsComponent,
                user_account_component_1.UserAccountComponent,
                user_favorites_component_1.UserFavoritesComponent,
                user_sidenav_component_1.UserSideNavComponent
            ],
            exports: [user_home_component_1.UserHomeComponent],
            providers: [
                user_jobs_service_1.UserJobsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map