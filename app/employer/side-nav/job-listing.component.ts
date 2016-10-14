import { Component, OnInit }                     from '@angular/core';
import { EmployerJobsService }                   from '../services/employer-jobs.service';

@Component({
    selector: 'job-listing',
    templateUrl: 'app/employer/side-nav/job-listing.component.html'
})
export class JobListingComponent implements OnInit {
    private listings: string[];

    constructor(private _employerJobsService: EmployerJobsService){        
    }

    ngOnInit() { 
        this.listings = this._employerJobsService.getFavorites();
    }
}