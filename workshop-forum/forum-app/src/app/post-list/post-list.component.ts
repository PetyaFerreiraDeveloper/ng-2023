import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../shared/interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: IPost[] | null = null;
  errorFetchingData = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.posts = value;
        console.log('posts', value);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }
}
