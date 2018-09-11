import { NgModule } from '@angular/core';
import { ThfAvatarModule } from './thf-avatar/thf-avatar.module';
import { ThfButtonModule } from './thf-button/thf-button.module';

@NgModule({
  declarations: [],
  imports: [
    ThfAvatarModule,
    ThfButtonModule
  ],
  exports: [
    ThfAvatarModule,
    ThfButtonModule
  ]
})

export class ThfComponentModule { }
