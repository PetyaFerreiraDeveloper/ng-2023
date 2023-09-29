import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  appEmailDomains = appEmailDomains;
  // @ViewChild('files', { static: true }) files!: ElementRef<HTMLInputElement>;

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  loginHandler(loginForm: NgForm): void {
    if (loginForm.invalid) return;
    const { email, password } = loginForm.value;
    this.authService.login(email, password).subscribe((user) => {
      // we can delete this line because of the subscription thing we did in authservice
      // this.authService.user = user;
      this.router.navigate(['theme/recent']);
    });
    console.log(loginForm);

    // console.log(this.files.nativeElement.files);

    // const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/'

    // this.router.navigate([returnUrl]);
  }
}
