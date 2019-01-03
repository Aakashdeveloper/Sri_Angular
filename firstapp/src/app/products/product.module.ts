import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { DiscountPipe } from './discount.pipe';
import { FilterProduct } from './filterProduct.pipe';
import { ProductDetailComponent } from './productDetail.component';
import { ProducService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { RouterGaurds } from './router.gaurds';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailComponent},
        ])
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        FilterProduct,
        ProductDetailComponent,
    ],
    providers: [
        ProducService,
        RouterGaurds
    ]
})

export class ProductModule {

}
