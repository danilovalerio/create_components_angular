import { Directive } from '@angular/core';

/**
 * Quando clicarmos no input o background color será azul e o texto branco
 *
 * Quando tirar o foco do input irá voltar para as cores padrões
 */
@Directive({
  selector: '[appInputBackground]',
})
export class InputBackgroundDirective {
  constructor() {}
}
