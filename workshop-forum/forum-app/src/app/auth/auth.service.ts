import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // user: IUser | null = {
  //   themes: ['hello', 'mello'],
  //   posts: ['post1', 'post2'],
  //   _id: 'someId',
  //   tel: '123456',
  //   email: 'misho123@gmail.bg',
  //   username: 'misho123',
  //   password: 'mishosPass',
  //   created_at: '12 july 2020',
  //   updatedAt: '12 july 2020',
  //   __v: 1,
  // };

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor(private http: HttpClient) {}

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel?: string
  ) {
    return this.http.post<IUser>('/api/register', {
      username,
      email,
      password,
      rePassword,
      tel,
    });
  }

  login(email: string, password: string) {
    return this.http.post<any>('/api/login', {
      email,
      password,
    });
  }

  getProfile() {
    return this.http.get<IUser>('/api/users/profile');
  }
}
