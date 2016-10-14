import { Component, OnInit, AfterViewInit }     from '@angular/core';
import { UserJobsService }                      from '../services/user-jobs.service';
import { UserJob }                              from './user-job.ts';

declare var jQuery:any;

@Component({
    selector: 'user-jobs',
    templateUrl: 'app/user/jobs/user-jobs.component.html'
})
export class UserJobsComponent implements OnInit, AfterViewInit {

    private jobs : UserJob[];
    private selection : number;	

    constructor(private _userJobsService: UserJobsService){        
    }

    ngOnInit() {
        this.jobs = this._userJobsService.getCompanyJobs();   
    }

    onChange(selection){        
        this.selection = selection;
        if(selection == 1) {  //Company Jobs
             this.jobs = this._userJobsService.getCompanyJobs();
        } else if(selection == 2) { //Friends Jobs
            this.jobs = this._userJobsService.getFriendsJobs();
        }
    }

	addToFavorites(jobHeading){
		this._userJobsService.addToFavorites(jobHeading);
	}

    ngAfterViewInit(): void {
		    setTimeout(() => {
		 	jQuery(document).ready(function($) {
                $.material.init();
                if($().noUiSlider) {
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
            	$('.open-list-btn').click(function() {
            		$(this).closest('.jobpost-lst-cnt').find('.frnd-list').show();
            	});
            	
            	$(".close-frnd-list").click(function(){
            		$(this).closest('.jobpost-lst-cnt').find('.frnd-list').hide();
            		var that = $(this)
            		$(this).closest('.jobpost-lst-cnt').find('.btn-referral').fadeOut(1000,function(){
            			that.closest('.jobpost-lst-cnt').find('.open-list-btn').fadeIn(1000);
            		});
            		
            	});
                
            	// $(".jobforward").click(function(){
            	// 	var that = $(this)
            	// 	$(this).fadeOut(1000,function(){
            	// 		that.closest('.jobpost-lst-cnt').find(".referral").fadeIn(1000);
            	// 	});
            	// });
            	
            	$(".select-btn").click(function(){
            		$(this).parent().addClass("frd-lst-half");
            		$(this).parent().find(".cancel-btn").fadeIn(750);
            		$(this).closest('li').find('.top-remove').fadeOut(500);
            	});

            	$(".cancel-btn, .top-remove").click(function(){
            		$(this).closest('li').slideUp(500)
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
                    $("#ref-frd" + index).show();
                    index = index + 1;
                });

            	$(".dropdown-toggle").click(function(){
            		$(".dropdownjs > ul > li").attr("tabindex", -1);
            		$("#dropdown-menu").find("input.fakeinput").removeClass("focus");
            	});
            
            	$(".dropdownjs input.fakeinput").click(function(){
            		if($('a.dropdown-toggle').parent('li').hasClass('open'))
            		{
            			$('.user-dropdown').trigger('click')
            			$(this).trigger('click');
            		}
            	});

			});
		}, 0);
		
	} //ngAfterViewInit

}