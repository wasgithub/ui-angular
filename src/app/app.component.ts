import { Component, OnInit } from '@angular/core';
import { ThfButtonGroupBaseComponent } from '../ui/components/thf-button-group/thf-button-base.componnet';
import { ThfButtonGroupItem } from '../ui/components/thf-button-group/thf-button-group-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui';
  buttons: Array<ThfButtonGroupItem> = [];

  ngOnInit() {
    this.buttons = [{label: 'Button 01', disabled: false}, {label: 'Button 02', disabled: true}, {label: 'Button 03', disabled: false}];
  }

  click() {
  }
}
