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
var EmployerValueBenefitComponent = (function () {
    function EmployerValueBenefitComponent() {
    }
    EmployerValueBenefitComponent.prototype.ngOnInit = function () {
    };
    EmployerValueBenefitComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            jQuery(document).ready(function ($) {
                // $("#owl-example").owlCarousel({
                // 	loop:true,
                // 	margin:0,
                // 	nav:true,
                // 	autoplay:false,
                // 	autoplayHoverPause:false,
                // 	items : 6,
                // 	responsive:{
                // 		0:{
                // 			items:1,
                // 			nav:true
                // 		},
                // 		400:{
                // 			items:2,
                // 			nav:true
                // 		},
                // 		700:{
                // 			items:3,
                // 			nav:false
                // 		},
                // 		1000:{
                // 			items:6,
                // 			nav:true,
                // 			loop:false
                // 			}
                // 		}
                // 	});
                // });		
                // jQuery(document).ready(function($) {
                // 	$("#owl-example1").owlCarousel({
                // 	loop:true,
                //     margin:0,
                // 	nav:true,
                //     autoplay:false,
                //     autoplayHoverPause:false,
                // 	items : 6,
                // 	responsiveClass:true,
                // 	responsive:{
                // 		0:{
                // 			items:1,
                // 			nav:true
                // 		},
                // 		400:{
                // 			items:1,
                // 			nav:true
                // 		},
                // 		700:{
                // 			items:1,
                // 			nav:false
                // 		},
                // 		1000:{
                // 			items:1,
                // 			nav:true,
                // 			loop:false
                // 		}
                // 	}
                // 	  });
                // });
                // jQuery(document).ready(function($) {
                // 	$("#owl-example2").owlCarousel({
                // 	loop:true,
                //     margin:30,
                // 	nav:true,
                //     autoplay:false,
                //     autoplayHoverPause:false,
                // 	items : 3,
                // 	responsiveClass:true,
                // 	responsive:{
                // 		0:{
                // 			items:1,
                // 			nav:true
                // 		},
                // 		400:{
                // 			items:1,
                // 			nav:true
                // 		},
                // 		600:{
                // 			items:2,
                // 			nav:false
                // 		},
                // 		1000:{
                // 			items:3,
                // 			nav:true,
                // 			loop:false
                // 		}
                // 	}
                // 	  });
            });
        }, 0);
    }; //ngAfterViewInit
    EmployerValueBenefitComponent = __decorate([
        core_1.Component({
            selector: 'employer-value-benefit',
            templateUrl: 'app/employer-landing/value-benefit/employer-value-benefit.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployerValueBenefitComponent);
    return EmployerValueBenefitComponent;
}());
exports.EmployerValueBenefitComponent = EmployerValueBenefitComponent;
//# sourceMappingURL=employer-value-benefit.component.js.map