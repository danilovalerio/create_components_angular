import { style } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrl: './element-ref.component.scss',
})
export class ElementRefComponent implements OnInit, AfterViewInit {
  @ViewChild('minhaDiv') divElemento!: ElementRef<HTMLDivElement>;

  /**
   * Readonly + private para garantir a imutabilidade após ser valorizada
   * @param _elementoRef
   */
  constructor(private readonly _elementoRef: ElementRef) {}

  ngOnInit() {
    console.log('ElementRef' + this._elementoRef);
    const divElemento = this._elementoRef.nativeElement.querySelector(
      '#minha-outra-div'
    ) as HTMLDivElement;

    divElemento.textContent = 'Sou a outra div';
    divElemento.style.backgroundColor = 'blue';

    divElemento.addEventListener('click', () => {
      console.log('Cliquei na div hahah!');
    });

    console.log('minha outra div referencia:' + divElemento);
  }

  ngAfterViewInit(): void {
    this.divElemento.nativeElement.style.backgroundColor = 'red';
    this.divElemento.nativeElement.textContent = 'sou uma div com element Ref';
    this.divElemento.nativeElement.classList.add('minha-class-nova-div');
  }

  criarElemento() {
    //criando uma nova div, inferida a tipagem do elemento com o createElement
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou a nova div!';
    novaDiv.classList.add('bg-green');

    //acesso a referência do template
    this._elementoRef.nativeElement.appendChild(novaDiv);
  }
}
