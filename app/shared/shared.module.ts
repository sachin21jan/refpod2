import { NgModule }                                from '@angular/core';

//Components
import { FooterComponent }                         from './footer.component';

@NgModule({

  declarations: [ 
     FooterComponent
  ],

  exports: [ 
      FooterComponent 
  ]

})

export class SharedModule {
}