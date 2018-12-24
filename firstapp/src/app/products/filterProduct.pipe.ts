import {Pipe, PipeTransform} from '@angular/core';

import { IProduct} from './product.model';

@Pipe({
    name: 'filterProduct'
})

export class ProductFilter implements PipeTransform {
    transform(value: IProduct[], inputKeyWord: string) {
        inputKeyWord = inputKeyWord ? inputKeyWord.toLowerCase() : null;
        return inputKeyWord ? value.filter((product: IProduct[]) =>
            (product.productName.toLowerCase().indexOf(inputKeyWord) !== -1)) : value;
    }
}
