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
var PostJobComponent = (function () {
    function PostJobComponent() {
    }
    PostJobComponent.prototype.ngOnInit = function () { };
    PostJobComponent.prototype.ngAfterViewInit = function () {
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
                $("#jobforward").click(function () {
                    $(this).fadeOut(1000, function () {
                        $("#referral").fadeIn(1000);
                    });
                });
                //Show/hide skills div
                $('.open-skills-form').click(function () {
                    $('#skills-div-form').toggle();
                });
                $(".rm-skill").click(function () {
                    $(this).parent().fadeOut(750, 'linear', function () {
                        $(this).remove();
                    });
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
                var $states = $(".js-source-states");
                var statesOptions = $states.html();
                $states.remove();
                $(".js-states").append(statesOptions);
                $("[data-fill-from]").each(function () {
                    var $this = $(this);
                    var codeContainer = $this.data("fill-from");
                    var $container = $(codeContainer);
                    var code = $.trim($container.html());
                    $this.text(code);
                    $this.addClass("prettyprint linenums");
                });
                $.fn.select2.amd.require([
                    "select2/core",
                    "select2/utils",
                    "select2/compat/matcher"
                ], function (Select2, Utils, oldMatcher) {
                    var $basicSingle = $(".js-example-basic-single");
                    var $basicMultiple = $(".js-example-basic-multiple");
                    var $limitMultiple = $(".js-example-basic-multiple-limit");
                    var $dataArray = $(".js-example-data-array");
                    var $dataArraySelected = $(".js-example-data-array-selected");
                    var data = [
                        { id: 0, text: 'enhancement' },
                        { id: 1, text: 'bug' },
                        { id: 2, text: 'duplicate' },
                        { id: 3, text: 'invalid' },
                        { id: 4, text: 'wontfix' }
                    ];
                    var $ajax = $(".js-example-data-ajax");
                    var $disabledResults = $(".js-example-disabled-results");
                    var $tags = $(".js-example-tags");
                    var $matcherStart = $('.js-example-matcher-start');
                    var $diacritics = $(".js-example-diacritics");
                    var $language = $(".js-example-language");
                    $.fn.select2.defaults.set("width", "100%");
                    $basicSingle.select2();
                    $basicMultiple.select2();
                    $limitMultiple.select2({
                        maximumSelectionLength: 2
                    });
                    function formatState(state) {
                        if (!state.id) {
                            return state.text;
                        }
                        var $state = $('<span>' +
                            '<img src="vendor/images/flags/' +
                            state.element.value.toLowerCase() +
                            '.png" class="img-flag" /> ' +
                            state.text +
                            '</span>');
                        return $state;
                    }
                    ;
                    $(".js-example-templating").select2({
                        templateResult: formatState,
                        templateSelection: formatState
                    });
                    $dataArray.select2({
                        data: data
                    });
                    $dataArraySelected.select2({
                        data: data
                    });
                    function formatRepo(repo) {
                        if (repo.loading)
                            return repo.text;
                        var markup = "<div class='select2-result-repository clearfix'>" +
                            "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
                            "<div class='select2-result-repository__meta'>" +
                            "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
                        if (repo.description) {
                            markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
                        }
                        markup += "<div class='select2-result-repository__statistics'>" +
                            "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
                            "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
                            "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    }
                    function formatRepoSelection(repo) {
                        return repo.full_name || repo.text;
                    }
                    $ajax.select2({
                        ajax: {
                            url: "https://api.github.com/search/repositories",
                            dataType: 'json',
                            delay: 250,
                            data: function (params) {
                                return {
                                    q: params.term,
                                    page: params.page
                                };
                            },
                            processResults: function (data, params) {
                                // parse the results into the format expected by Select2
                                // since we are using custom formatting functions we do not need to
                                // alter the remote JSON data, except to indicate that infinite
                                // scrolling can be used
                                params.page = params.page || 1;
                                return {
                                    results: data.items,
                                    pagination: {
                                        more: (params.page * 30) < data.total_count
                                    }
                                };
                            },
                            cache: true
                        },
                        escapeMarkup: function (markup) { return markup; },
                        minimumInputLength: 1,
                        templateResult: formatRepo,
                        templateSelection: formatRepoSelection
                    });
                    $(".js-example-disabled").select2();
                    $(".js-example-disabled-multi").select2();
                    $(".js-example-responsive").select2({
                        width: 'resolve' // need to override the changed default
                    });
                    $disabledResults.select2();
                    $(".js-example-programmatic").select2();
                    $(".js-example-programmatic-multi").select2();
                    //$eventSelect.select2();
                    $tags.select2({
                        tags: ['red', 'blue', 'green']
                    });
                    $(".js-example-tokenizer").select2({
                        tags: true,
                        tokenSeparators: [',', ' ']
                    });
                    function matchStart(term, text) {
                        if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
                            return true;
                        }
                        return false;
                    }
                    $matcherStart.select2({
                        matcher: oldMatcher(matchStart)
                    });
                    $(".js-example-basic-hide-search").select2({
                        minimumResultsForSearch: Infinity
                    });
                    $diacritics.select2();
                    $language.select2({
                        language: "es"
                    });
                    $(".js-example-theme-single").select2({
                        theme: "classic"
                    });
                    $(".js-example-theme-multiple").select2({
                        theme: "classic"
                    });
                    $(".js-example-rtl").select2();
                });
                $('.singlepost').show();
                $('.multiplepost').hide();
                $("#postjob-drop").change(function () {
                    if ($('#postjob-drop').val() == 1) {
                        $('.singlepost').show();
                        $('.multiplepost').hide();
                    }
                    else if ($('#postjob-drop').val() == 2) {
                        $('.singlepost').hide();
                        $('.multiplepost').show();
                    }
                });
            });
        }, 0);
    }; //ngAfterViewInit
    PostJobComponent = __decorate([
        core_1.Component({
            selector: 'post-job',
            templateUrl: 'app/employer/post-job/post-job.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PostJobComponent);
    return PostJobComponent;
}());
exports.PostJobComponent = PostJobComponent;
//# sourceMappingURL=post-job.component.js.map