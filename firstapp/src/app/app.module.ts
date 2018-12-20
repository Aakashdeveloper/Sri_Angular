import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { ProductComponent } from './products/product.component';

@NgModule({

    // All Modules
    imports: [
        BrowserModule,
        FormsModule
     ],

    // All Components Pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent
    ],

    // Only First component
    bootstrap: [
        AppComponent
     ],

    // All Services
    providers: [ ]
})

export class AppModule {

}
