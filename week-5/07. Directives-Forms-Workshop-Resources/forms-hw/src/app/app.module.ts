import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { FullNameDirective } from './full-name.directive';
import { PhoneValidationDirective } from './phone-validation.directive';
import { PasswordValidationDirective } from './password-validation.directive';
import { RePassValidationDirective } from './re-pass-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FullNameDirective,
    PhoneValidationDirective,
    PasswordValidationDirective,
    RePassValidationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // used for template driven kjforms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
