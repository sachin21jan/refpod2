"use strict";
var router_1 = require('@angular/router');
var landing_component_1 = require('./landing.component');
var sign_in_component_1 = require('./sign-in/sign-in.component');
var sign_up_component_1 = require('./sign-up/sign-up.component');
exports.LandingRouting = router_1.RouterModule.forChild([
    {
        path: 'user',
        component: landing_component_1.LandingComponent,
        children: [
            {
                path: '',
                component: sign_in_component_1.SignInComponent
            },
            {
                path: 'signup',
                component: sign_up_component_1.SignUpComponent
            }
        ]
    }
]);
//# sourceMappingURL=landing.routing.js.map