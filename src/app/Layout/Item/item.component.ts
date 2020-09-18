import {Component, Input} from '@angular/core';
import {Item} from '../item';


@Component({
  selector: 'app-list',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() items;
}
