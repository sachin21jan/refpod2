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
var SignUpComponent = (function () {
    function SignUpComponent(_formBuilder, _authenticationService, _router) {
        this._formBuilder = _formBuilder;
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.form = this._formBuilder.group({
            email: ['', form_validators_1.FormValidators.validateEmail],
            password: ['', [forms_1.Validators.required //, 
                ]
            ],
            password2: ['', forms_1.Validators.required]
        }, { validator: form_validators_1.FormValidators.match });
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent.prototype.login = function () {
        console.log(this.form.value);
        if (this.form.valid) {
            console.log("Sign up successful");
            // boolean authenticated = this._authenticationService.login(this.email, this.password);
            this._router.navigate(['userhome']);
        }
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'sign-up',
            templateUrl: 'app/user-landing/sign-up/sign-up.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, authentication_service_1.AuthenticationService, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map