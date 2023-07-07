import { Component } from '@angular/core';
import { MyClass } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // users = [
  //   {
  //     name: 'Ivan',
  //   },
  //   {
  //     name: 'Pesho',
  //   },
  // ];

  // constructor(test: MyClass) {
  //   console.log(test);
  // }

  // addUserHandler(nameInput: HTMLInputElement): void {
  //   const { value: name } = nameInput;
  //   this.users.push({ name });
  //   nameInput.value = '';
  // }
}
