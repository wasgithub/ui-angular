import { EventEmitter, Input, Output } from '@angular/core';

import { convertToBoolean } from '../../utils/util';

const THF_BUTTON_TYPES = ['default', 'primary', 'danger', 'link'];
const THF_BUTTON_TYPE_DEFAULT = 'default';

/**
 * @description
 *
 * O `thf-button` permite que o usuário execute ações predefinidas pelo desenvolvedor.
 *
 * Através dos tipos, é possível identificar a importância de cada ação, sendo ela primária (`primary`) ou até mesmo uma
 * ação irreversível (`danger`), como a exclusão de um registro.
 *
 * ### Boas práticas
 *
 * - Evite `labels` extensos que quebram o layout do `thf-button`, use `labels` diretos, curtos e intuitivos.
 * - Utilize apenas um `thf-button` configurado como `primary` por página.
 * - Para ações irreversíveis use sempre o tipo `danger`.
 */
export class ThfButtonBaseComponent {

  private _disabled: boolean;
  private _small: boolean;

  /** Label do botão. */
  @Input('t-label') label: string;

  /**
   * Ícone exibido ao lado esquerdo do label do botão.
   *
   * É possível usar qualquer uma dos ícones da [Biblioteca de ícones](/guides/icons).
   */
  @Input('t-icon') icon?: string;

  @Input('t-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input('t-small') set small(value: boolean) {
    this._small = <any>value === '' ? true : convertToBoolean(value);
  }

  get small(): boolean {
    return this.small = this._small;
  }

}
