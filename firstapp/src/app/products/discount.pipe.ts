import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discount'
})

export class DiscountPipe implements PipeTransform {
    transform(value: number) {
        if (value > 30) {
            value = value - 5 ;
        }
        return value;
    }
}
