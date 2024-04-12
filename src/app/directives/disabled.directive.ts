import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabled]',
})
export class DisabledDirective {
  //@HostBinding('attr.disabled') attrDisabled = true;
  @HostBinding('disabled') propDisabled = false;
}
