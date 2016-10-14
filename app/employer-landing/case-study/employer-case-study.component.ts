import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'employer-case-study',
    templateUrl : 'app/employer-landing/case-study/employer-case-study.component.html' 
})

export class EmployerCaseStudyComponent implements OnInit, AfterViewInit {

    constructor(){
	}

	ngOnInit(){		
	}

    ngAfterViewInit(): void {
		    setTimeout(() => {
		 	jQuery(document).ready(function($) {
		    	$("#owl-example2").owlCarousel({
				loop:true,
		        margin:30,
		    	nav:true,
		        autoplay:false,
		        autoplayHoverPause:false,
				items : 3,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
						nav:true
					},
					400:{
						items:1,
						nav:true
					},
		
					600:{
						items:2,
						nav:false
					},
					1000:{
						items:3,
						nav:true,
						loop:false
					}
				}
				  });
			});
		}, 0);
		
	} //ngAfterViewInit
}