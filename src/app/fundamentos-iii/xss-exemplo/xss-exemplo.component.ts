import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-xss-exemplo',
  templateUrl: './xss-exemplo.component.html',
  styleUrl: './xss-exemplo.component.scss',
})
export class XssExemploComponent {
  constructor(private _elRef: ElementRef) {}

  criarElemento(inputText: string) {
    console.log(inputText);
    const divElement = document.createElement('div');

    divElement.innerHTML = inputText;

    this._elRef.nativeElement.appendChild(divElement);
  }
}
