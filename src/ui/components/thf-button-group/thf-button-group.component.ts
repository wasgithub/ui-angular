import { Component, OnInit } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { ThfButtonGroupBaseComponent } from './thf-button-base.componnet';

@Component({
  selector: 'thf-button-group',
  templateUrl: './thf-button-group.component.html',
  styleUrls: ['./thf-button-group.component.css']
})
export class ThfButtonGroupComponent extends ThfButtonGroupBaseComponent implements OnInit {

  ngOnInit() {
  }

}
