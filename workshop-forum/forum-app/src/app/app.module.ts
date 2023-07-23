import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ThemeModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}