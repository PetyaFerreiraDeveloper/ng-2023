import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: IUser[] | null = null;
  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.globalLoaderService.showLoader('Loading users');
    this.userService.loadUsers().subscribe({
      next: (userList) => {
        this.globalLoaderService.hideLoader();
        this.userList = userList;
      },
    });
  }

  reloadUsersHandler(): void {
    this.loadUsers();
  }

  onUserClickHandler(user:IUser): void {
    console.log('clicked', user.username);
    
  }
 }
