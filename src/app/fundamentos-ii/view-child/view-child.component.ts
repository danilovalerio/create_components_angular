import { FilhoViewchildComponent } from './../filho-viewchild/filho-viewchild.component';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss',
})
export class ViewChildComponent {
  @ViewChild('meuInput')
  meuInputEL!: ElementRef<HTMLInputElement>;

  @ViewChild('minhaDiv')
  minhaDivEL!: ElementRef<HTMLDivElement>;

  /**
   * FilhoViewchildComponent é o nome da classe do nosso componente
   * a sua tipagem, sem ElementRef de HTML, pois ele não é.
   */
  @ViewChild('filhoComp')
  filhoCompReferencia!: FilhoViewchildComponent;

  updateInputText() {
    this.meuInputEL.nativeElement.value = 'Texto Atualizado';
    console.log(this.meuInputEL);
  }

  focusInputText() {
    this.meuInputEL.nativeElement.focus();
  }

  updateDiv() {
    this.minhaDivEL.nativeElement.innerText = 'Texto Atualizado na Div!';
  }

  ola() {
    //aqui temos acesso aos métodos e váriaveis do componente filho
    this.filhoCompReferencia.dizerOi();
    this.filhoCompReferencia.message = 'Eu disse Oiiii!';
  }
}
