import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = {
    themes: ['hello', 'mello'],
    posts: ['post1', 'post2'],
    _id: 'someId',
    tel: '123456',
    email: 'misho@abv.bg',
    username: 'misho',
    password: 'mishosPass',
    created_at: '12 july 2020',
    updatedAt: '12 july 2020',
    __v: 1,
  };

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() {}
}
