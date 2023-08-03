import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { FullNameDirective } from './full-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FullNameDirective,
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
