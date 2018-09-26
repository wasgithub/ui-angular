import { Component, OnInit } from '@angular/core';

import { ThfButtonBaseComponent } from './thf-button-base.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'thf-button',
  templateUrl: './thf-button.component.html',
  styleUrls: ['./thf-button.component.css']
})
export class ThfButtonComponent extends ThfButtonBaseComponent {

  // onClick() {
  //   this.click.emit(null);
  // }

}
