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

  private _disabled?: boolean = false;
  private _loading?: boolean = false;
  private _small?: boolean = false;
  private _type?: string = 'default';

  /** Label do botão. */
  @Input('t-label') label: string;

  /**
   * @optional
   *
   * @description
   *
   * Exibe um ícone de carregamento à esquerda do _label_ do botão.
   *
   * > Quando esta propriedade estiver habilitada, desabilitará o botão.
   *
   * @default `false`
   */
  @Input('t-loading') set loading(value: boolean) {
    this._loading = convertToBoolean(value);
  }

  get loading(): boolean {
    return this._loading;
  }

  /**
   * Ícone exibido ao lado esquerdo do label do botão.
   *
   * É possível usar qualquer uma dos ícones da [Biblioteca de ícones](/guides/icons).
   */
  @Input('t-icon') icon?: string;

  /**
   * @deprecated 12.1.21
   *
   * @optional
   *
   * @description
   *
   * Define o botão como primário, ou seja, deve ser a ação principal da página.
   *
   * > Veja a propriedade `t-type`.
   *
   * @default `false`
   */
  @Input('t-primary') set primary(value: boolean) {
    const isPrimary = <any>value === '' ? true : convertToBoolean(value);

    this.type = isPrimary ? 'primary' : THF_BUTTON_TYPE_DEFAULT;
  }
  get primary(): boolean {
    return this._type === 'primary';
  }

  /**
   * @optional
   *
   * @description
   *
   * Deixa o botão menor.
   *
   * @default `false`
   */
  @Input('t-small') set small(value: boolean) {
    this._small = <any>value === '' ? true : convertToBoolean(value);
  }
  get small(): boolean {
    return this._small;
  }

  /**
   * @optional
   *
   * @description
   *
   * Define o estilo do `thf-button`.
   *
   * Valore válidos:
   *  - `default`: estilo padrão do `thf-button`.
   *  - `primary`: deixa o `thf-button` com destaque, deve ser usado para ações primárias.
   *  - `danger`: deve ser usado para ações que o usuário precisa ter cuidado ao executa-lá.
   *  - `link`: o `thf-button` recebe o estilo de um link.
   *
   * @default `default`
   */
  @Input('t-type') set type(value: string) {
    this._type = THF_BUTTON_TYPES.includes(value) ? value : THF_BUTTON_TYPE_DEFAULT;
  }
  get type(): string {
    return this._type;
  }

  /**
   * @optional
   *
   * @description
   *
   * Desabilita o `thf-button` e não permite que o usuário interaja com o mesmo.
   *
   * @default `false`
   */
  @Input('t-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }
  get disabled(): boolean {
    return this._disabled;
  }

  /** Ação que será executada quando o usuário clicar sobre o `thf-button`. */
  @Output('t-click') click = new EventEmitter<null>();

}
