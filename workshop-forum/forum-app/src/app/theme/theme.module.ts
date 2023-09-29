import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeRoutingModule } from './theme-routing.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ThemeCommentComponent } from './theme-comment/theme-comment.component';



@NgModule({
  declarations: [
    ThemeListComponent,
    NewThemeComponent,
    ThemeDetailComponent, 
    PostListComponent,
    MainComponent,
    ThemeCommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ThemeRoutingModule,
  ], 
  exports: [
    ThemeListComponent,
    PostListComponent,
  ]
})
export class ThemeModule { }
