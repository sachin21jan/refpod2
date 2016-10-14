import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'client-testimonial',
    templateUrl : 'app/user-landing/client-testimonial/client-testimonial.component.html' 
})

export class ClientTestimonialComponent implements OnInit, AfterViewInit {
    constructor(){
	}

	ngOnInit(){		
	}

    ngAfterViewInit(): void {
		    setTimeout(() => {

            jQuery(document).ready(function($) {
		    	$("#owl-example1").owlCarousel({
				loop:true,
		        margin:0,
		    	nav:true,
		        autoplay:false,
		        autoplayHoverPause:false,
				items : 6,
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
		
					700:{
						items:1,
						nav:false
					},
					1000:{
						items:1,
						nav:true,
						loop:false
					}
				}
				  });

            });
		}, 0);
    }
}