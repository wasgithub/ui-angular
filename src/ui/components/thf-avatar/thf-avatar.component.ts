import { Component, OnInit } from '@angular/core';
import { ThfAvatarBaseComponent } from './thf-avatar-base.component';

const THF_AVATAR_DEFAULT_SRC = 'src/assets/images/ninja-simple-512.png';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'thf-avatar',
  templateUrl: './thf-avatar.component.html',
  styleUrls: ['./thf-avatar.component.css']
})
export class ThfAvatarComponent extends ThfAvatarBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.src) {
      this.src = THF_AVATAR_DEFAULT_SRC;
    }
  }

  onError(): void {
    this.src = THF_AVATAR_DEFAULT_SRC;
  }

}
