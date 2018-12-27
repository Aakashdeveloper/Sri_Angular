import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { FilterProduct } from './products/filterProduct.pipe';
import { StarComponent } from './shared/star.component';
import { ProducService } from './products/product.service';

@NgModule({

    // All Modules
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule
     ],

    // All Components  & Pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        FilterProduct,
        StarComponent
    ],

    // Only First component
    bootstrap: [
        AppComponent
     ],

    // All Services
    providers: [
        ProducService
    ]
})

export class AppModule {

}
