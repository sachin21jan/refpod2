"use strict";
var router_1 = require('@angular/router');
var user_home_component_1 = require('./user-home.component');
var user_jobs_component_1 = require('./jobs/user-jobs.component');
var user_profile_component_1 = require('./profile/user-profile.component');
var user_friends_component_1 = require('./friends/user-friends.component');
exports.UserRouting = router_1.RouterModule.forChild([
    {
        path: 'userhome',
        component: user_home_component_1.UserHomeComponent,
        children: [
            {
                path: '',
                component: user_jobs_component_1.UserJobsComponent
            },
            {
                path: 'profile',
                component: user_profile_component_1.UserProfileComponent
            },
            {
                path: 'friends',
                component: user_friends_component_1.UserFriendsComponent
            }
        ]
    }
]);
//# sourceMappingURL=user.routing.js.map