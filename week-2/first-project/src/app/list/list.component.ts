import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  myProp = 'Hello world'

  constructor() {
    setTimeout(() => {
      this.myProp = 'Hello other world'
    }, 1000)
  }
}
