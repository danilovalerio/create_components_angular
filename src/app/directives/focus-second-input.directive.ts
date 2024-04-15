import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]',
})
export class FocusSecondInputDirective implements AfterViewInit {
  //@HostBinding('style.backgroundColor') bgColor = 'blue';
  //@HostBinding('textContent') text = 'Estou com Hostbing';

  //elRef terá a instância dop elemento que aplica nossa diretiva
  constructor(private _elRef: ElementRef) {}

  ngAfterViewInit() {
    console.log('Lista da diretiva: ' + this._elRef);

    //aqui vamos buscar a lista de inputs contendo na nossa referencia que esta em nativeElement que é a div pai que implementa nossos inputs
    const inputList = this._elRef.nativeElement.querySelectorAll(
      'input'
    ) as HTMLInputElement[];

    if (inputList.length > 1) {
      inputList[1].onfocus;
    }
  }
}
