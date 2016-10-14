import { Component, OnInit }                     from '@angular/core';
import { Router }                                from '@angular/router';
import { FormGroup, FormBuilder, Validators }    from '@angular/forms';
import { AuthenticationService }                 from '../services/authentication.service';
import { FormValidators }                        from '../../shared/form-validators';

@Component({
    selector: 'sign-up',
    templateUrl: 'app/user-landing/sign-up/sign-up.component.html'
})
export class SignUpComponent implements OnInit {
    email: string;
    password: string;
    password2: string;
    form: FormGroup;   
    constructor(private _formBuilder: FormBuilder,
                private _authenticationService: AuthenticationService,
                private _router: Router) {
        this.form = this._formBuilder.group({
            email: ['', FormValidators.validateEmail ],
            password: ['', [ Validators.required//, 
                             //FormValidators.passwordStrength 
                            ]
                      ],
            password2: ['', Validators.required]
        }, { validator: FormValidators.match} );

     }

    ngOnInit() { }

    login(){
        console.log(this.form.value);
        if(this.form.valid){
            console.log("Sign up successful");
            // boolean authenticated = this._authenticationService.login(this.email, this.password);
            this._router.navigate(['userhome']);            
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