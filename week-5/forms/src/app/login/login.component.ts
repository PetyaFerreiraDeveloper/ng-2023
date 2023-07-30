import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  handleFormSubmit(value: { email: string; password: string }): void {
    console.log(value);
  }
}
