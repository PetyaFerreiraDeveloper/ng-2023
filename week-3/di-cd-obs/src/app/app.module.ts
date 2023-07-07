import { Injectable, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@Injectable({
  providedIn: 'root'
})
export class MyClass {
  constructor() {
    console.log('Nameless class was constructed');
  }
}

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule],
  providers: [MyClass],
  bootstrap: [AppComponent],
})
export class AppModule {}
