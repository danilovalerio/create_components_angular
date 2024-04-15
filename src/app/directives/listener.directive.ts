import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]',
})
export class ListenerDirective {
  @HostListener('click')
  clicou() {
    console.log('Clicou no item');
  }
}
