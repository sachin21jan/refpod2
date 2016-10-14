import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FooterComponent } from '../shared/footer.component';

declare var jQuery:any;

@Component({
		templateUrl : 'app/employer/employer-home.component.html'
})
export class EmployerHomeComponent implements OnInit, AfterViewInit {

     ngOnInit(){
       
    }

ngAfterViewInit(): void {
		    setTimeout(() => {
		 	jQuery(document).ready(function($) {
				 
 			});
		}, 0);
		
	} //ngAfterViewInit
    
}