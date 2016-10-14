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
var ClientTestimonialComponent = (function () {
    function ClientTestimonialComponent() {
    }
    ClientTestimonialComponent.prototype.ngOnInit = function () {
    };
    ClientTestimonialComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            jQuery(document).ready(function ($) {
                $("#owl-example1").owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    autoplay: false,
                    autoplayHoverPause: false,
                    items: 6,
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
                        700: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: 1,
                            nav: true,
                            loop: false
                        }
                    }
                });
            });
        }, 0);
    };
    ClientTestimonialComponent = __decorate([
        core_1.Component({
            selector: 'client-testimonial',
            templateUrl: 'app/user-landing/client-testimonial/client-testimonial.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ClientTestimonialComponent);
    return ClientTestimonialComponent;
}());
exports.ClientTestimonialComponent = ClientTestimonialComponent;
//# sourceMappingURL=client-testimonial.component.js.map