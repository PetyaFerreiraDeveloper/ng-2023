import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  // declaration property is used for template specific items. All components inside of the AppModule should be listed here
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent
  ],
  // imports is used for importing other modules and dependencies
  imports: [
    BrowserModule // this includes common module
  ],
  // providers are used for dependency injections DI
  providers: [],
  // here we add components that can be used in the main index.html file
  bootstrap: [AppComponent]
})
export class AppModule { }
