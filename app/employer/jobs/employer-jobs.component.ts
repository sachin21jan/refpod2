import { Component, OnInit, AfterViewInit }         from '@angular/core';
import { EmployerJobsService }                      from '../services/employer-jobs.service';
import { EmployerJob }                              from './employer-job.ts';

declare var jQuery:any;

@Component({
    selector: 'employer-jobs',
    templateUrl: 'app/employer/jobs/employer-jobs.component.html'
})
export class EmployerJobsComponent implements OnInit, AfterViewInit {

    private jobs : EmployerJob[];
    private selection : number;	

    constructor(private _employerJobsService: EmployerJobsService){        
    }

    ngOnInit() {
        this.jobs = this._employerJobsService.getCompanyJobs();   
    }

    onChange(selection){        
        this.selection = selection;
        if(selection == 1) {  //Company Jobs
             this.jobs = this._employerJobsService.getCompanyJobs();
        } else if(selection == 2) { //Friends Jobs
            this.jobs = this._employerJobsService.getFriendsJobs();
        }
    }

	addToFavorites(jobHeading){
		this._employerJobsService.addToFavorites(jobHeading);
	}

    ngAfterViewInit(): void {
		    setTimeout(() => {
		 	jQuery(document).ready(function($) {
				var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function () {
			    var index = $('.bs-component').index($(this).parent());
			      $.get(window.location.href, function (data) {
			        var html = $(data).find('.bs-component').eq(index).html();
			        html = cleanSource(html);
			        $("#source-modal pre").text(html);
			        $("#source-modal").modal();
			      })
			
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
			      var indentSize = lines[0].length - lines[0].trim().length,
			      re = new RegExp(" {" + indentSize + "}");			
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
				if($().noUiSlider)
				{
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
				
				$(".refferal").click(function(){
					$(this).closest('.jobpost-lst-cnt').find('.frd-cnt').toggle();
				});

				$("#dropdown-menu select").dropdown();
				$('#addexp').click(function(){
					var body = $("html, body");
					body.stop().animate({scrollTop:$("#expdet").offset().top}, '1000', 'swing', function() {
					});
				});
				$('#addedu').click(function(){
					var body = $("html, body");
					body.stop().animate({scrollTop:$("#edudet").offset().top}, '1000', 'swing', function() {
					});
				});

				let index = 1;
    			$(".addnew-frd").click(function(){
        		$("#ref-frd"+index).show();
					index = index + 1;
    			});

			});
		}, 0);
		
	} //ngAfterViewInit

}