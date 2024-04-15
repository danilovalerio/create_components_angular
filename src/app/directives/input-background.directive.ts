import { Directive, HostBinding, HostListener, Input } from '@angular/core';

/**
 * Quando clicarmos no input o background color será azul e o texto branco
 *
 * Quando tirar o foco do input irá voltar para as cores padrões
 */
@Directive({
  selector: '[appInputBackground]',
})
export class InputBackgroundDirective {
  /**
   * o valor será passado pelo selector por isso
   * o nome do input pe o mesmo do selector da diretiva
   */
  @Input() appInputBackground: string = 'white';
  @Input('tColor') textColor: string = 'black';

  @HostBinding('style.backgroundColor') bgColor: string = '';
  @HostBinding('style.color') color: string = '';

  @HostListener('focus')
  onFocus() {
    console.log('Focus chamado');
    this.bgColor = this.appInputBackground;
    this.color = this.textColor;
  }

  /**
   * Quando perde o foco
   */
  @HostListener('blur')
  onBlur() {
    console.log('Focus chamado');
    this.bgColor = 'white';
    this.color = 'black';
  }
}
