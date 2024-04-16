import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss-exemplo',
  templateUrl: './xss-exemplo.component.html',
  styleUrl: './xss-exemplo.component.scss',
})
export class XssExemploComponent {
  constructor(
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2
  ) {}

  criarElemento(inputText: string) {
    console.log(inputText);
    const divElement = document.createElement('div');

    divElement.innerHTML = inputText;

    this._elRef.nativeElement.appendChild(divElement);
  }

  criarElementoRender2(inputText: string) {
    console.log(inputText);
    const divElement = this._renderer2.createElement('div');

    divElement.innerHTML = inputText;

    this._elRef.nativeElement.appendChild(divElement);
  }
}
