import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductFilter } from './products/filterProduct.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({

    // All Modules
    imports: [
        BrowserModule,
        FormsModule
     ],

    // All Components  & Pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductFilter,
        StarComponent
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
