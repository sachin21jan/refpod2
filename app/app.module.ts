import { NgModule }                                from '@angular/core';
import { BrowserModule }                           from '@angular/platform-browser';
import { HttpModule }                              from '@angular/http';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

//Custom module
import { LandingModule }                           from './user-landing/landing.module';
import { EmployerLandingModule }                   from './employer-landing/employer-landing.module';
import { UserModule }                              from './user/user.module';
import { EmployerModule }                          from './employer/employer.module';

//Components
import { AppComponent }                            from './app.component';

//Routing
import { AppRouting }                              from './app.routing';
import { LandingRouting }                          from './user-landing/landing.routing';


@NgModule({
  imports:  [ 
    BrowserModule,
    LandingModule,
    EmployerLandingModule,   
    UserModule, 
    EmployerModule,   
    AppRouting
  ],

  declarations: [ 
     AppComponent
     ],
  bootstrap: [ AppComponent ],
  providers: [  { 
             provide : 'ApiEndpoint', 
             useValue: 'http://localhost:8090/'
        } ]
})

export class AppModule {
}

