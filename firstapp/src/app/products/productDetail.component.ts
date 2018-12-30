import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct} from './product.model';
import { ProducService } from './product.service';

@Component({
    selector: 'app-detail',
    templateUrl: './productDetail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProducService) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._productService.getProductDetail(this.id)
            .subscribe((data) =>  this.details = data);
    }

    onBack(): void {
        this._router.navigate(['products']);
    }
}

/*
name: String;
    imgUrl: String;
    description: String;
this._route
            .queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.description = data['desc'];
                this.imgUrl = data['image'];
            });
*/
