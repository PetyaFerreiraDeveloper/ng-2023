import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { appEmailDomains } from 'src/app/shared/constants';
import {
  appEmailValidator,
  sameValueGroupValidator,
} from 'src/app/shared/validators';

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

  constructor(private fb: FormBuilder) {}

  registerHandler() {
    if (this.form.invalid) return;
    console.log(this.form.value);

    this.form.reset();
  }
}

// of(1).pipe(
//   map(() => {
//     throw new Error('BAD ERROR')
//   }),
//   catchError(error => {
//     console.log(error)
//     return [1000]
//   })
// ).subscribe({
//   next: (value) => {console.log(value)},
//   error: (error) => console.log(error)
// })
