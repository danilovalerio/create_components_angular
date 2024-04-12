import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  @HostBinding('class') classObj = {
    'meu-texto': true,
    'meu-size': true,
  };
}
