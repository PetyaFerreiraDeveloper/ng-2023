import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReducePipe } from './reduce.pipe';
import { ShortenPipe } from './shorten.pipe';
import { AppInterceptorProvider } from './app.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ReducePipe, ShortenPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
