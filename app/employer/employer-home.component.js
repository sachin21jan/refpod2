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
var EmployerHomeComponent = (function () {
    function EmployerHomeComponent() {
    }
    EmployerHomeComponent.prototype.ngOnInit = function () {
    };
    EmployerHomeComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            jQuery(document).ready(function ($) {
            });
        }, 0);
    }; //ngAfterViewInit
    EmployerHomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/employer/employer-home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployerHomeComponent);
    return EmployerHomeComponent;
}());
exports.EmployerHomeComponent = EmployerHomeComponent;
//# sourceMappingURL=employer-home.component.js.map