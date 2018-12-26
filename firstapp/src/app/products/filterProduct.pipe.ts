import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'filterProduct'
})

export class FilterProduct implements PipeTransform {
    transform(value: IProduct[], filterBy: string) {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((product: IProduct) =>
            (product.productName.toLowerCase().indexOf(filterBy) !== -1)) : value;
    }
}
