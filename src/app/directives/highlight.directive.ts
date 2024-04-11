import { Directive, HostBinding, HostListener } from '@angular/core';
/**
 * Diretiva de atributo - vai modificar atributo ou propriedades do elemento de parágrafo no caso.
 * Diretiva estrutural por exemplo seria o NgFor NgIf, pois muda a estrutura do nosso conteúdo.
 * appHighlight - é o nome que será usado
 */
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  //propriedade do objeto html inicializado
  @HostBinding('style.background-color') bgColor = 'transparent';

  //Essa diretiva vai ficar escutando o eventos do angular, no caso o mouseover
  @HostListener('mouseover') mouseSobre() {
    this.bgColor = 'orange';
  }

  @HostListener('mouseout') mouseFora() {
    this.bgColor = 'transparent';
  }
}
