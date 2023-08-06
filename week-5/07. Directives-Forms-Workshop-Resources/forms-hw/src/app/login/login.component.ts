import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

const myValidator: ValidatorFn = (control: AbstractControl) => {
  return control.value.length > 10 ? {myValidator: true} : null
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, myValidator]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })
  constructor(private fb:FormBuilder) {}

  handleFormSubmit(){
    
  }
}
