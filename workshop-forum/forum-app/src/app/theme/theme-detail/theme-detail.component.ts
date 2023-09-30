import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IPost, ITheme } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-theme-detail',
  templateUrl: './theme-detail.component.html',
  styleUrls: ['./theme-detail.component.scss'],
})
export class ThemeDetailComponent implements OnInit {
  currentTheme!: ITheme;
  currentThemeId: string | null = null;
  comments: IPost[] = []
  errorFetchingData = false;

  get user() {
    return this.authService.user;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.currentTheme = this.activatedRoute.snapshot.data?.['theme'];
    if (!this.currentTheme) return;
    this.comments = this.currentTheme.posts
  }

 
}
