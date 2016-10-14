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
var user_jobs_service_1 = require('../services/user-jobs.service');
var UserJobsComponent = (function () {
    function UserJobsComponent(_userJobsService) {
        this._userJobsService = _userJobsService;
    }
    UserJobsComponent.prototype.ngOnInit = function () {
        this.jobs = this._userJobsService.getCompanyJobs();
    };
    UserJobsComponent.prototype.onChange = function (selection) {
        this.selection = selection;
        if (selection == 1) {
            this.jobs = this._userJobsService.getCompanyJobs();
        }
        else if (selection == 2) {
            this.jobs = this._userJobsService.getFriendsJobs();
        }
    };
    UserJobsComponent.prototype.addToFavorites = function (jobHeading) {
        this._userJobsService.addToFavorites(jobHeading);
    };
    UserJobsComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            jQuery(document).ready(function ($) {
                $.material.init();
                if ($().noUiSlider) {
                    $(".shor").length
                        ?
                            $(".shor").noUiSlider({
                                start: 40,
                                connect: "lower",
                                range: {
                                    min: 0,
                                    max: 100
                                }
                            })
                        :
                            '';
                    $(".svert").length
                        ?
                            $(".svert").noUiSlider({
                                orientation: "vertical",
                                start: 40,
                                connect: "lower",
                                range: {
                                    min: 0,
                                    max: 100
                                }
                            })
                        :
                            '';
                }
                //Show/hide
                $('.open-list-btn').click(function () {
                    $(this).closest('.jobpost-lst-cnt').find('.frnd-list').show();
                });
                $(".close-frnd-list").click(function () {
                    $(this).closest('.jobpost-lst-cnt').find('.frnd-list').hide();
                    var that = $(this);
                    $(this).closest('.jobpost-lst-cnt').find('.btn-referral').fadeOut(1000, function () {
                        that.closest('.jobpost-lst-cnt').find('.open-list-btn').fadeIn(1000);
                    });
                });
                // $(".jobforward").click(function(){
                // 	var that = $(this)
                // 	$(this).fadeOut(1000,function(){
                // 		that.closest('.jobpost-lst-cnt').find(".referral").fadeIn(1000);
                // 	});
                // });
                $(".select-btn").click(function () {
                    $(this).parent().addClass("frd-lst-half");
                    $(this).parent().find(".cancel-btn").fadeIn(750);
                    $(this).closest('li').find('.top-remove').fadeOut(500);
                });
                $(".cancel-btn, .top-remove").click(function () {
                    $(this).closest('li').slideUp(500);
                });
                $("#dropdown-menu select").dropdown();
                $('#addexp').click(function () {
                    var body = $("html, body");
                    body.stop().animate({ scrollTop: $("#expdet").offset().top }, '1000', 'swing', function () {
                    });
                });
                $('#addedu').click(function () {
                    var body = $("html, body");
                    body.stop().animate({ scrollTop: $("#edudet").offset().top }, '1000', 'swing', function () {
                    });
                });
                var index = 1;
                $(".addnew-frd").click(function () {
                    $("#ref-frd" + index).show();
                    index = index + 1;
                });
                $(".dropdown-toggle").click(function () {
                    $(".dropdownjs > ul > li").attr("tabindex", -1);
                    $("#dropdown-menu").find("input.fakeinput").removeClass("focus");
                });
                $(".dropdownjs input.fakeinput").click(function () {
                    if ($('a.dropdown-toggle').parent('li').hasClass('open')) {
                        $('.user-dropdown').trigger('click');
                        $(this).trigger('click');
                    }
                });
            });
        }, 0);
    }; //ngAfterViewInit
    UserJobsComponent = __decorate([
        core_1.Component({
            selector: 'user-jobs',
            templateUrl: 'app/user/jobs/user-jobs.component.html'
        }), 
        __metadata('design:paramtypes', [user_jobs_service_1.UserJobsService])
    ], UserJobsComponent);
    return UserJobsComponent;
}());
exports.UserJobsComponent = UserJobsComponent;
//# sourceMappingURL=user-jobs.component.js.map