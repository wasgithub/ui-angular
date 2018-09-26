import { Input } from '@angular/core';

const THF_AVATAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
const THF_AVATAR_SIZE_DEFAULT = 'md';

export class ThfAvatarBaseComponent {
  private _size = 'md';

  // tslint:disable-next-line:no-input-rename
  @Input('t-src') src: string;

  @Input('t-size') set size(value: string) {
    this._size = THF_AVATAR_SIZES.includes(value) ? value : THF_AVATAR_SIZE_DEFAULT;
  }

  get size(): string {
    return this._size;
  }

}
