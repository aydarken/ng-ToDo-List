import {Component} from '@angular/core';
import {Item} from './item';


@Component({
  selector: 'app-layout',
  template: '<app-add-item (newItemEvent)="addItem($event)"></app-add-item>' +
    '<app-list [items]="items"></app-list>'
})

export class LayoutComponent {
  counter: number = 1;
  items = [
    new Item(this.counter, 'First item', false)
  ];

  addItem(item: string) {
    this.items.push(new Item(this.counter + 1, item, false));
  }

}
