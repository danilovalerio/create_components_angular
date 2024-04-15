import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]',
})
export class FocusSecondInputDirective {
  @HostBinding('style.backgroundColor') bgColor = 'blue';
  @HostBinding('textContent') text = 'Estou com Hostbing';
}
