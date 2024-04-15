import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]',
})
export class ListenerDirective {
  @HostListener('click')
  clicou() {
    console.log('Clicou no item');
  }

  /**
   * Segundo parâmetro é um array de string
   */
  @HostListener('keyup', ['$event', '"Meu argumento"'])
  digitouAlgo(event: Event, param2: string) {
    console.log(param2);

    const textFull = (event.target as HTMLInputElement).value;
    console.log('Texto: ' + textFull);
  }
}
