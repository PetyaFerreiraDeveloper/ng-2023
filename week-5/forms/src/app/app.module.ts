import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyIfDirective } from './my-if.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyRouterLinkDirective,
    MyIfDirective,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for templates driven component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
