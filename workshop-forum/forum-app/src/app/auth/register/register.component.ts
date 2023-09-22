import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import {
  appEmailValidator,
  sameValueGroupValidator,
} from 'src/app/shared/validators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    code: [''],
    tel: [''],
    pass: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: [],
      },
      {
        validators: [sameValueGroupValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registerHandler() {
    if (this.form.invalid) return;
    const {
      username,
      email,
      pass: { password, rePassword } = {},
      tel,
    } = this.form.value;

    this.authService
      .register(username!, email!, password!, rePassword!, tel || undefined)
      .subscribe((user) => {
        // we can delete this line because of the subscription thing we did in authservice
        // this.authService.user = user;
        this.router.navigate(['/theme/recent']);
      });

    // this.form.reset();
  }
}
