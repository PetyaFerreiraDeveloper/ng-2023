import { Component } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  users: IUser[] = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov',
    },
    {
      firstName: 'Petko',
      lastName: 'Petkov',
    },
  ];

  selectedUserIndex: null | number = null;

  showLastName = true;

  get showSelectedIndex(): boolean {
    return (this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >= 0;
  }

  constructor() {}

  handleClickEvent(event: MouseEvent) {
    this.showLastName = !this.showLastName;
  }

  listItemCLickHandler(index: number) {
    if (this.selectedUserIndex === index) {
      this.selectedUserIndex = null;
      return;
    }
    this.selectedUserIndex = index;
  }
  customEventHandler($event: ICustomEvent) {
    console.log($event);
    
  }

}
