import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './theme/theme.module';
import { AppInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule,
    BrowserModule,
    ThemeModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    ThemeModule,
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
