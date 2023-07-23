import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Misho } from 'src/app/shared/consts/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(private router: Router, private authService: AuthService) {
    this.authService.user = Misho;
  
    this.router.navigate(['/']);
  }
}
