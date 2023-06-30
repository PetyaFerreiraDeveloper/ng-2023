import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() userObj!: { firstName: string; lastName: string };
  @Input() showLastName!: boolean;
  @Input() staticString!: string;

  @Output() customEvent = new EventEmitter<ICustomEvent>();

  constructor() {}
  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation()
    this.customEvent.emit({ test: 123 });
  }
}
