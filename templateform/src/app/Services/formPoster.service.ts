import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer.model';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FormPosterService {

    constructor(private _http: HttpClient) { }

    postCustomerData(cust: Customer): Observable<any> {
        return this._http.post('http://localhost:3100/postEmployee', cust);
    }
}
