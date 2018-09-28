import { Input } from '@angular/core';
import { ThfButtonGroupItem } from './thf-button-group-item.interface';

export class ThfButtonGroupBaseComponent {

  @Input('t-buttons') buttons: Array<ThfButtonGroupItem> = [];

}
