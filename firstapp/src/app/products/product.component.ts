import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.model';
import { ProducService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:green}', 'h3{color:tomato}']
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '****Product List****';
    showImage: Boolean = true;
    imageWidth: Number = 100;
    filterData: String;
    products: IProduct[];

    constructor(private _productService: ProducService) {
    }

    ngOnInit(): void {
       this._productService.getProduct()
        .subscribe((data) => this.products = data);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecice(message): void {
        this.title =  '~~~~~Product List ~~~~' + message;
    }
}



/*
One Way
--Data Binding {{}}
--Property Binding []
--Event Binding ()
Two Way [()]

string
number
boolean

var a = 10
var b = 'a'
var c = true

ngOnInit(): void {
       this._productService.getProduct()
        .then((data) => this.products = data);
    }

    <a href="https://ibb.co/TrR7jkM"><img src="https://i.ibb.co/TrR7jkM/hammer.png" alt="hammer" border="0"></a>
https://i.ibb.co/vmS3kRH/saw.png
https://i.ibb.co/HD3RHMW/videogame.jpg
    */
