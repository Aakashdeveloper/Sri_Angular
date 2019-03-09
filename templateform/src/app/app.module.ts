import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FormPosterService } from './Services/formPoster.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormPosterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



/*
CLi Commands
ng new templateForm
ng g c app/customerForm
ng g s formService
ng g p discount
ng g m sharedModule

ng-dirty    ng-valid    ng-untouched
ng-pristine ng-invalid  ng-touched
*/

