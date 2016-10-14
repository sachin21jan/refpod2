"use strict";
var router_1 = require('@angular/router');
var employer_home_component_1 = require('./employer-home.component');
var employer_jobs_component_1 = require('./jobs/employer-jobs.component');
var post_job_component_1 = require('./post-job/post-job.component');
var employer_profile_component_1 = require('./profile/employer-profile.component');
exports.EmployerRouting = router_1.RouterModule.forChild([
    {
        path: 'employerhome',
        component: employer_home_component_1.EmployerHomeComponent,
        children: [
            {
                path: '',
                component: employer_jobs_component_1.EmployerJobsComponent
            },
            {
                path: 'postjob',
                component: post_job_component_1.PostJobComponent
            },
            {
                path: 'profile',
                component: employer_profile_component_1.EmployerProfileComponent
            }
        ]
    }
]);
//# sourceMappingURL=employer.routing.js.map