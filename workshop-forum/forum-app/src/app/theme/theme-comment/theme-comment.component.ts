import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IPost, IUser } from 'src/app/shared/interfaces';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-comment',
  templateUrl: './theme-comment.component.html',
  styleUrls: ['./theme-comment.component.scss'],
})
export class ThemeCommentComponent implements OnInit {
  @Input() commentObj!: IPost;

  alreadyLiked = false;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  get user() {
    const user: IUser = this.authService.user!;
    return user;
  }

  ngOnInit(): void {
    if (this.commentObj.likes.includes(this.user._id)) {
      this.alreadyLiked = true;
    }
  }

  toggleLikeMode(): void {
    this.alreadyLiked = !this.alreadyLiked;
  }

  handleLike() {
    this.themeService
      .likeThemeComment(this.commentObj._id, this.user)
      .subscribe(() => {
        this.toggleLikeMode();
      });
  }

  handleDisLike() {
    this.themeService
      .unlikeThemeComment(this.commentObj._id, this.user)
      .subscribe(() => {
        this.toggleLikeMode();
      });
  }
}
