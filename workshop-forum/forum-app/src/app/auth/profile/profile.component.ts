import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  showEditMode = false;
  formSubmitted = false;

  get user() {
    const { username, email, tel: telephone} = this.authService.user!;
    const [code, ...tel] = telephone.split(' ');
    return {
      username,
      email,
      tel: tel.join(' '),
      code,
    };
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    tel: [''],
    code: [''],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form.setValue(this.user);
  }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if(this.showEditMode) {
      this.formSubmitted = false
    }
  }

  saveProfile(): void {
    this.formSubmitted = true;
    if (this.form.invalid) return;
    const { username, email, code, tel } = this.form.value;
    this.authService.user = { username, email, tel: code + ' ' + tel } as any;
    this.toggleEditMode();
    console.log(this.form.value);
  }
}
