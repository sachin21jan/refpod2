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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var authentication_service_1 = require('../services/authentication.service');
var form_validators_1 = require('../../shared/form-validators');
var SignInComponent = (function () {
    function SignInComponent(_formBuilder, _authenticationService, _router) {
        this._formBuilder = _formBuilder;
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.isAuthenticated = false;
        this.badLogin = false;
        this.submitted = false;
        this.form = this._formBuilder.group({
            email: ['', form_validators_1.FormValidators.validateEmail],
            password: ['', forms_1.Validators.required]
        });
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent.prototype.passwordChange = function () {
        this.badLogin = false;
    };
    SignInComponent.prototype.login = function () {
        this.submitted = true;
        if (this.form.valid) {
            this.isAuthenticated = this._authenticationService.login(this.email, this.password);
            if (this.isAuthenticated) {
                this._router.navigate(['userhome']);
            }
            else {
                this.badLogin = true;
            }
        }
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'sign-in',
            templateUrl: 'app/user-landing/sign-in/sign-in.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, authentication_service_1.AuthenticationService, router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map