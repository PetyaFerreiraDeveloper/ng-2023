import { Component } from '@angular/core';

export interface IRegisterForm {
  username: string;
  email: string;
  tel: number;
  password: string;
  rePassword:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  handleFormSubmit(value: IRegisterForm): void {
    console.log(value)
  }
}
