import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var jQuery: any;

@Component({
    selector: 'featured-employer',
    templateUrl : 'app/user-landing/featured-employer/featured-employer.component.html' 
})
export class FeaturedEmployerComponent implements OnInit, AfterViewInit {

	constructor(){
	}

	ngOnInit(){		
	}

    ngAfterViewInit(): void {
		    setTimeout(() => {
		 	jQuery(document).ready(function($) {
			$("#owl-example").owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				autoplay:false,
				autoplayHoverPause:false,
				items : 6,
				
				responsive:{
					0:{
						items:1,
						nav:true
					},
					400:{
						items:2,
						nav:true
					},
					700:{
						items:3,
						nav:false
					},
					1000:{
						items:6,
						nav:true,
						loop:false
						}
					}
				});			
			});
		}, 0);
	} //ngAfterViewInit
}