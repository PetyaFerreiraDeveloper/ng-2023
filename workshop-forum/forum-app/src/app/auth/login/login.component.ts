import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Misho } from 'src/app/shared/consts/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
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
    // console.log(this.files.nativeElement.files);
    // this.authService.user = Misho;

    // const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/'

    // this.router.navigate([returnUrl]);
  }
}
