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
var employer_jobs_service_1 = require('../services/employer-jobs.service');
var EmployerJobsComponent = (function () {
    function EmployerJobsComponent(_employerJobsService) {
        this._employerJobsService = _employerJobsService;
    }
    EmployerJobsComponent.prototype.ngOnInit = function () {
        this.jobs = this._employerJobsService.getCompanyJobs();
    };
    EmployerJobsComponent.prototype.onChange = function (selection) {
        this.selection = selection;
        if (selection == 1) {
            this.jobs = this._employerJobsService.getCompanyJobs();
        }
        else if (selection == 2) {
            this.jobs = this._employerJobsService.getFriendsJobs();
        }
    };
    EmployerJobsComponent.prototype.addToFavorites = function (jobHeading) {
        this._employerJobsService.addToFavorites(jobHeading);
    };
    EmployerJobsComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            jQuery(document).ready(function ($) {
                var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function () {
                    var index = $('.bs-component').index($(this).parent());
                    $.get(window.location.href, function (data) {
                        var html = $(data).find('.bs-component').eq(index).html();
                        html = cleanSource(html);
                        $("#source-modal pre").text(html);
                        $("#source-modal").modal();
                    });
                });
                $('.bs-component [data-toggle="popover"]').popover();
                $('.bs-component [data-toggle="tooltip"]').tooltip();
                $(".bs-component").hover(function () {
                    $(this).append($button);
                    $button.show();
                }, function () {
                    $button.hide();
                });
                function cleanSource(html) {
                    var lines = html.split(/\n/);
                    lines.shift();
                    lines.splice(-1, 1);
                    var indentSize = lines[0].length - lines[0].trim().length, re = new RegExp(" {" + indentSize + "}");
                    lines = lines.map(function (line) {
                        if (line.match(re)) {
                            line = line.substring(indentSize);
                        }
                        return line;
                    });
                    lines = lines.join("\n");
                    return lines;
                }
                $(".icons-material .icon").each(function () {
                    $(this).after("<br><br><code>" + $(this).attr("class").replace("icon ", "") + "</code>");
                });
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
                $(".refferal").click(function () {
                    $(this).closest('.jobpost-lst-cnt').find('.frd-cnt').toggle();
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
            });
        }, 0);
    }; //ngAfterViewInit
    EmployerJobsComponent = __decorate([
        core_1.Component({
            selector: 'employer-jobs',
            templateUrl: 'app/employer/jobs/employer-jobs.component.html'
        }), 
        __metadata('design:paramtypes', [employer_jobs_service_1.EmployerJobsService])
    ], EmployerJobsComponent);
    return EmployerJobsComponent;
}());
exports.EmployerJobsComponent = EmployerJobsComponent;
//# sourceMappingURL=employer-jobs.component.js.map