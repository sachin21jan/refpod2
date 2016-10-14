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
var employer_landing_component_1 = require('./employer-landing.component');
var employer_home_banner_component_1 = require('./home-banner/employer-home-banner.component');
var employer_landing_navbar_component_1 = require('./navbar/employer-landing-navbar.component');
var employer_sign_in_component_1 = require('./sign-in/employer-sign-in.component');
var employer_sign_up_component_1 = require('./sign-up/employer-sign-up.component');
var employer_how_it_works_component_1 = require('./how-it-works/employer-how-it-works.component');
var employer_value_benefit_component_1 = require('./value-benefit/employer-value-benefit.component');
var employer_case_study_component_1 = require('./case-study/employer-case-study.component');
var employer_contact_us_component_1 = require('./contact-us/employer-contact-us.component');
var authentication_service_1 = require('./services/authentication.service');
//Routing
var employer_landing_routing_1 = require('./employer-landing.routing');
var EmployerLandingModule = (function () {
    function EmployerLandingModule() {
    }
    EmployerLandingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                shared_module_1.SharedModule,
                employer_landing_routing_1.EmployerLandingRouting
            ],
            declarations: [
                employer_landing_component_1.EmployerLandingComponent,
                employer_home_banner_component_1.EmployerHomeBannerComponent,
                employer_landing_navbar_component_1.EmployerLandingNavbarComponent,
                employer_sign_in_component_1.EmployerSignInComponent,
                employer_sign_up_component_1.EmployerSignUpComponent,
                employer_how_it_works_component_1.EmployerHowItWorksComponent,
                employer_value_benefit_component_1.EmployerValueBenefitComponent,
                employer_case_study_component_1.EmployerCaseStudyComponent,
                employer_contact_us_component_1.EmployerContactUsComponent
            ],
            exports: [employer_landing_component_1.EmployerLandingComponent],
            providers: [
                authentication_service_1.AuthenticationService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployerLandingModule);
    return EmployerLandingModule;
}());
exports.EmployerLandingModule = EmployerLandingModule;
//# sourceMappingURL=employer-landing.module.js.map