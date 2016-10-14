"use strict";
var router_1 = require('@angular/router');
var employer_landing_component_1 = require('./employer-landing.component');
var employer_sign_in_component_1 = require('./sign-in/employer-sign-in.component');
var employer_sign_up_component_1 = require('./sign-up/employer-sign-up.component');
exports.EmployerLandingRouting = router_1.RouterModule.forChild([
    {
        path: 'employer',
        component: employer_landing_component_1.EmployerLandingComponent,
        children: [
            {
                path: '',
                component: employer_sign_in_component_1.EmployerSignInComponent
            },
            {
                path: 'signup',
                component: employer_sign_up_component_1.EmployerSignUpComponent
            }
        ]
    }
]);
//# sourceMappingURL=employer-landing.routing.js.map