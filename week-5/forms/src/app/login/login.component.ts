import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { static: true }) loginForm!: NgForm;

  ngOnInit(): void {
    // this.loginForm?.valueChanges?.subscribe(console.log);
  }

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) return;
    const value: { email: string; password: string } = form.value;

    console.log(value);
    // form.setValue({ email: '', password: '' });
    form.reset();
  }
}
