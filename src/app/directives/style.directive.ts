import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @HostBinding('style.backgroundColor') bgColor = 'orange';
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.fontSize') size = '22px';
}
