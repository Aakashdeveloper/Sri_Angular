import { Component, OnChanges,  Input,
        Output, EventEmitter } from '@angular/core';
import { debugOutputAstAsTypeScript } from '../../../node_modules/@angular/compiler';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 6;
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }

}



/*
ngOninit
onchange
const

var a = 10
var b = " my age is "+ a
var b = `my age is ${a}`


function add(a,b){
    return a+b
}

var sum = add(1,2)
*/
