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
var EmployerCaseStudyComponent = (function () {
    function EmployerCaseStudyComponent() {
    }
    EmployerCaseStudyComponent.prototype.ngOnInit = function () {
    };
    EmployerCaseStudyComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            jQuery(document).ready(function ($) {
                $("#owl-example2").owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: true,
                    autoplay: false,
                    autoplayHoverPause: false,
                    items: 3,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        400: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 2,
                            nav: false
                        },
                        1000: {
                            items: 3,
                            nav: true,
                            loop: false
                        }
                    }
                });
            });
        }, 0);
    }; //ngAfterViewInit
    EmployerCaseStudyComponent = __decorate([
        core_1.Component({
            selector: 'employer-case-study',
            templateUrl: 'app/employer-landing/case-study/employer-case-study.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployerCaseStudyComponent);
    return EmployerCaseStudyComponent;
}());
exports.EmployerCaseStudyComponent = EmployerCaseStudyComponent;
//# sourceMappingURL=employer-case-study.component.js.map