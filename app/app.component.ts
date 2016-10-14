import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, AfterViewInit {

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
			})
		}, 0);
		
	} //ngAfterViewInit
		
}