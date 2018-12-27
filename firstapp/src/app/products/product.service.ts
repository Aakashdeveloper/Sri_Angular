import {Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { IProduct } from './product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class ProducService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: Http,
                private __http: HttpClient) {}

    getProduct(): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(this._productUrl);
    }
}


/*
getProduct(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
                .toPromise()
                .then((res) => res.json());
    }

private extractData(res: Response) {
        return res.json();
    }

    getProduct(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                .pipe(map(this.extractData));
    }
*/

