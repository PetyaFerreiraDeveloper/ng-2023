import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  userList: IUser[] | null = null
  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.globalLoaderService.showLoader('Loading users');
    this.userService.loadUsers().subscribe({
      next: () => {
        this.globalLoaderService.hideLoader()
        this.userList =this.userList
      }
    })
  }
}
