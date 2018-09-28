import { NgModule } from '@angular/core';
import { ThfAvatarModule } from './thf-avatar/thf-avatar.module';
import { ThfButtonModule } from './thf-button/thf-button.module';
import { ThfButtonGroupComponent } from './thf-button-group/thf-button-group.component';
import { ThfButtonGroupModule } from './thf-button-group/thf-button-group.module';

@NgModule({
  declarations: [],
  imports: [
    ThfAvatarModule,
    ThfButtonModule,
    ThfButtonGroupModule
  ],
  exports: [
    ThfAvatarModule,
    ThfButtonModule,
    ThfButtonGroupModule
  ]
})

export class ThfComponentModule { }
