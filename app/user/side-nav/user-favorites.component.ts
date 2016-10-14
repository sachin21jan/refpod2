import { Component, OnInit }                    from '@angular/core';
import { UserJobsService }                      from '../services/user-jobs.service';

@Component({
    selector: 'user-favorites',
    templateUrl: 'app/user/side-nav/user-favorites.component.html'
})
export class UserFavoritesComponent implements OnInit {
    private favorites: string[];

    constructor(private _userJobsService: UserJobsService){        
    }

    ngOnInit() { 
        this.favorites = this._userJobsService.getFavorites();
    }
}