import { Component, OnInit }                     from '@angular/core';
import { Router, RouterModule }  from '@angular/router';
import { FormGroup, FormBuilder, Validators }    from '@angular/forms';
import { AuthenticationService }                 from '../services/authentication.service';
import { FormValidators }                        from '../../shared/form-validators';

@Component({
    selector: 'sign-in',
    templateUrl: 'app/user-landing/sign-in/sign-in.component.html'
     
})
export class SignInComponent implements OnInit {
    email: string;
    password: string;
    form: FormGroup;
    isAuthenticated: boolean = false;
    badLogin: boolean = false;
    submitted : boolean = false;
    constructor(private _formBuilder: FormBuilder,
                private _authenticationService: AuthenticationService,
                private _router: Router) {
        this.form = this._formBuilder.group({
            email: ['', FormValidators.validateEmail ],
            password: ['', Validators.required]
        });

     }

    ngOnInit() { }

    passwordChange(){        
        this.badLogin = false;
    }

    login(){        
        this.submitted = true;
        if(this.form.valid){
            this.isAuthenticated = this._authenticationService.login(this.email, this.password);
            if(this.isAuthenticated){            
                this._router.navigate(['userhome']);
            } else {
                this.badLogin = true;                
            }
                // .subscribe( 
                //     result => {
                //         this.isAuthenticated = result;
                //         if(this.isAuthenticated){
                //             this._router.navigate(['userhome']);
                //         }
                //     }//,
                    // response => {
                    //     if(response.status = 404){
                    //         this._router.navigate(['not-found']);
                    //     }
                    // }
                // );
        }
    }

}