import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {
  inputVal: string;
  @Output() newItemEvent = new EventEmitter<string>();

  addButton(): void {
    this.newItemEvent.emit(this.inputVal);
  }
}
