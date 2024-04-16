import { ElementRef, Injectable } from '@angular/core';

/**
 * com o @Injectable a gente sinaliza para o angular que essa classe service pode ser injetada para qualquer outra classe
 *
 * como provideIn: 'root' ele será uma instância única, como se fosse um singleton
 */
@Injectable({
  providedIn: 'root',
})
export class TesteService {
  //constructor(private _elementoRef: ElementRef) {}

  criar(elementoRef: ElementRef) {
    //criando uma nova div, inferida a tipagem do elemento com o createElement
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou a nova div!';
    novaDiv.classList.add('bg-green');

    //acesso a referência do template
    elementoRef.nativeElement.appendChild(novaDiv);
  }
}
