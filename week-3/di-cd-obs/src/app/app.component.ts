import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users = [
    {
      name: 'Ivan',
    },
    {
      name: 'Pesho',
    },
  ];

  constructor() {}

  addUserHandler(nameInput: HTMLInputElement): void {
    const { value: name } = nameInput;
    this.users.push({ name });
    nameInput.value = '';
  }
}
