import { NgModule } from '@angular/core';
import { ThfButtonGroupComponent } from './thf-button-group.component';
import { CommonModule } from '@angular/common';
import { ThfButtonModule } from '../thf-button/thf-button.module';

@NgModule({
  imports: [
    CommonModule,

    ThfButtonModule
  ],
  declarations: [
    ThfButtonGroupComponent
  ],
  exports: [
    ThfButtonGroupComponent
  ]
})

export class ThfButtonGroupModule { }
