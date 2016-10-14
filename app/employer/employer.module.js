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
var employer_home_component_1 = require('./employer-home.component');
var employer_navbar_component_1 = require('./employer-navbar.component');
var employer_profile_component_1 = require('./profile/employer-profile.component');
var employer_jobs_component_1 = require('./jobs/employer-jobs.component');
var post_job_component_1 = require('./post-job/post-job.component');
var company_profile_component_1 = require('./side-nav/company-profile.component');
var job_listing_component_1 = require('./side-nav/job-listing.component');
var employer_sidenav_component_1 = require('./side-nav/employer-sidenav.component');
var employer_jobs_service_1 = require('./services/employer-jobs.service');
//Routing
var employer_routing_1 = require('./employer.routing');
var EmployerModule = (function () {
    function EmployerModule() {
    }
    EmployerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                shared_module_1.SharedModule,
                employer_routing_1.EmployerRouting
            ],
            declarations: [
                employer_home_component_1.EmployerHomeComponent,
                employer_navbar_component_1.EmployerNavbarComponent,
                employer_profile_component_1.EmployerProfileComponent,
                employer_jobs_component_1.EmployerJobsComponent,
                post_job_component_1.PostJobComponent,
                job_listing_component_1.JobListingComponent,
                company_profile_component_1.CompanyProfileComponent,
                employer_sidenav_component_1.EmployerSideNavComponent
            ],
            exports: [employer_home_component_1.EmployerHomeComponent],
            providers: [
                employer_jobs_service_1.EmployerJobsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployerModule);
    return EmployerModule;
}());
exports.EmployerModule = EmployerModule;
//# sourceMappingURL=employer.module.js.map