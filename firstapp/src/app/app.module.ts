import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { ProductModule } from './products/product.module';

@NgModule({

    // All Modules
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'}
        ]),
        ProductModule
     ],
    // All Components  & Pipe
    declarations: [
        AppComponent,
        HomeComponent,
        OrderComponent
    ],
    // Only First component
    bootstrap: [
        AppComponent
     ],
    // All Services
    providers: []
})

export class AppModule {

}
