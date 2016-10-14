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
var landing_component_1 = require('./landing.component');
var home_banner_component_1 = require('./home-banner/home-banner.component');
var navbar_component_1 = require('./navbar/navbar.component');
var sign_in_component_1 = require('./sign-in/sign-in.component');
var sign_up_component_1 = require('./sign-up/sign-up.component');
var how_it_works_component_1 = require('./how-it-works/how-it-works.component');
var featured_employer_component_1 = require('./featured-employer/featured-employer.component');
var client_testimonial_component_1 = require('./client-testimonial/client-testimonial.component');
var contact_us_component_1 = require('./contact-us/contact-us.component');
var authentication_service_1 = require('./services/authentication.service');
//Routing
var landing_routing_1 = require('./landing.routing');
var LandingModule = (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                shared_module_1.SharedModule,
                landing_routing_1.LandingRouting
            ],
            declarations: [
                landing_component_1.LandingComponent,
                home_banner_component_1.HomeBannerComponent,
                navbar_component_1.NavbarComponent,
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent,
                how_it_works_component_1.HowItWorksComponent,
                featured_employer_component_1.FeaturedEmployerComponent,
                client_testimonial_component_1.ClientTestimonialComponent,
                contact_us_component_1.ContactUsComponent
            ],
            exports: [landing_component_1.LandingComponent],
            providers: [
                authentication_service_1.AuthenticationService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LandingModule);
    return LandingModule;
}());
exports.LandingModule = LandingModule;
//# sourceMappingURL=landing.module.js.map