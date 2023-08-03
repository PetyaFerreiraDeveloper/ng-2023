import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface IRegisterForm {
  username: string;
  email: string;
  countryCode: string;
  tel: string;
  occupation: string;
  password: string;
  rePassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  handleFormSubmit(form: NgForm): void {

    if(form.invalid) {return}
    const value: IRegisterForm = form.value;
    console.log(value);
    form.resetForm()
  }
}
