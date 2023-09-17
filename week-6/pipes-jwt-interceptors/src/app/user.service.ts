import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users$$ = new BehaviorSubject<null | any>(null);
  private isLoading$$ = new BehaviorSubject(false);

  user$ = this.users$$.asObservable();
  isLoading$ = this.isLoading$$.asObservable()

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.isLoading$$.next(true);
    this.http.get<any[]>('/api/users').subscribe({
      next: (users) => {
        this.users$$.next(users);
        this.isLoading$$.next(false);
      },
    });
  }
}
