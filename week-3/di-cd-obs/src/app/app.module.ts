import { Injectable, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
// import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MyClass {
  constructor() {
    console.log('Nameless class was constructed');
  }
}

@NgModule({
  declarations: [AppComponent, TestComponent, UserListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    // MyClass, 
    // UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
