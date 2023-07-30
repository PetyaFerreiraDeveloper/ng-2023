import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  ngAfterViewInit() {
    console.dir(this.loginForm);
  }

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) return;
    const value: { email: string; password: string } = form.value;

    console.log(value);
    // form.setValue({ email: '', password: '' });
    form.reset()
  }
}
