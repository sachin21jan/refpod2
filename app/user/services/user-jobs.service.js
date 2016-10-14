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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var user_job_1 = require('../jobs/user-job');
var UserJobsService = (function () {
    function UserJobsService(_http, apiEndpoint) {
        this._http = _http;
        this.apiEndpoint = apiEndpoint;
        this._url = this.apiEndpoint + "/jobPosts";
        this.favorites = [];
    }
    UserJobsService.prototype.addToFavorites = function (jobHeading) {
        if (this.favorites.find(function (i) { return i == jobHeading; }) == undefined) {
            this.favorites.unshift(jobHeading);
        }
    };
    UserJobsService.prototype.getFavorites = function () {
        return this.favorites;
    };
    UserJobsService.prototype.listCompanyJobs = function () {
        return [
            new user_job_1.UserJob("Programmer Analyst - Java Developer", "2", "Developer", "4", "", [
                "Design and Develop high scale SharePoint 2010/2013 intranet, internet facing sites",
                "Work on research and development of latest SharePoint tools and technologies",
                "Should have knowledge in architecture and design of SharePoint implementations using best practices"
            ]),
            new user_job_1.UserJob("Senior Programmer Analyst", "6", "Sr. Analyst", "4", "", [
                "Expertise in LAMP and ROR Environment.",
                "Agile and waterfall life cycles.",
                "MY SQL, PostgreSQL, SQL Server"
            ]),
            new user_job_1.UserJob("Sales Co Ordinator", "1", "Sales Executive", "10", "", [
                "Contact qualified leads by telephone, network, or personally.",
                "Setup meetings with leads to promote and win business.",
                "Achieve agreed-upon targets of lead qualification and revenue generation every month."
            ])
        ];
    };
    UserJobsService.prototype.listFriendsJobs = function () {
        return [
            new user_job_1.UserJob("Software Architect, Professional Services", "1", "Software Architect", "12", "Dealer.com", [
                "Collaborate across business, engineering and product stakeholders to drive holistic technology implementations while maintaining a constant focus on delivering client value",
                "Lead application and software/solution architecture practice across engineering scrum teams while exposing project and solution related architectural issues to the wider architecture team",
                "Lead and participate in the conceptual phases of identifying and solving business problems and initiatives",
                "Facilitate integration, alignment and excellent communication within the solution group, and across the enterprise",
                "Work with other architects and senior technologists to curate and maintain a technology portfolio for the group that is aligned with the goals of the enterprise",
                "Provide educational/mentoring resources to architecture and engineering teams",
                "Define and evangelize design and modeling methodologies in an Enterprise Agile environment",
                "Consult with architecture, development, infrastructure and operational teams to address issues relating to application architecture, such as performance or availability, and recommend solutions",
                "Work across the solution group to evaluate emerging technologies, and drive the evolution of current technologies, defining a roadmap which increases the value of technology to the business, while collaborating with architects across the enterprise to accelerate learning",
                "Performs other related duties as assigned"
            ]),
            new user_job_1.UserJob("Senior Programmer Analyst", "2", "Sr. Analyst", "4", "Intel Corporation", [
                "Expertise in LAMP and ROR Environment.",
                "Agile and waterfall life cycles.",
                "MY SQL, PostgreSQL, SQL Server"
            ]),
            new user_job_1.UserJob("Sales Co Ordinator", "1", "Sales Executive", "10", "Lenovo Group Ltd", [
                "Contact qualified leads by telephone, network, or personally.",
                "Setup meetings with leads to promote and win business.",
                "Achieve agreed-upon targets of lead qualification and revenue generation every month."
            ])
        ];
    };
    UserJobsService.prototype.getCompanyJobs = function () {
        this._http.get(this._url)
            .map(function (res) { return res.json(); })
            .subscribe(function (posts) {
            console.log(posts);
        });
        return this.listCompanyJobs();
    };
    UserJobsService.prototype.getFriendsJobs = function () {
        return this.listFriendsJobs();
    };
    UserJobsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('ApiEndpoint')), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], UserJobsService);
    return UserJobsService;
}());
exports.UserJobsService = UserJobsService;
//# sourceMappingURL=user-jobs.service.js.map