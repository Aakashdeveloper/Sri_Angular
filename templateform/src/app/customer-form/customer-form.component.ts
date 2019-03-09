import { Component, OnInit } from '@angular/core';
import { Customer } from '../Models/customer.model';
import { NgForm } from '@angular/forms';
import { FormPosterService} from '../Services/formPoster.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  languages: any[] = ['Angular', 'NodeJS', 'ReactJS', 'GO'];
  model = new Customer('Sri', 'Lakshmi', '1234', 'a@a.com', true, 'female', 'Angular');

  constructor( private _FormPosterService: FormPosterService) { }

  ngOnInit() {
  }

  formSubmit(form: NgForm): void {
    // console.log(form.value);
    this._FormPosterService.postCustomerData(form.value)
      .subscribe((res) => console.log(res));
  }

}
