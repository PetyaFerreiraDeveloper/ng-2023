import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { AppEmailDirective } from './validators/app-email.directive';
import { MatchPasswordDirective } from './validators/match-password.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { ShortenDatePipe } from './pipes/shorten-date.pipe';
import { DateWithHourPipe } from './pipes/date-with-hour.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMessageComponent,
    AppEmailDirective,
    MatchPasswordDirective,
    ShortenPipe,
    ElapsedTimePipe,
    ShortenDatePipe,
    DateWithHourPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LoaderComponent,
    WelcomeMessageComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe,
    ShortenDatePipe,
    DateWithHourPipe,
  ],
})
export class SharedModule {}
