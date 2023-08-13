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

  get user() {
    const { username, email, tel: telephone } = this.authService.user!;
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

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  toggleEditMode(): void{ 
    this.showEditMode = !this.showEditMode
    console.log(this.showEditMode);
    
  } 
}
