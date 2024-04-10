import { FilhoViewchildComponent } from './../filho-viewchild/filho-viewchild.component';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss',
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('meuInput', { static: true })
  meuInputEL!: ElementRef<HTMLInputElement>;

  @ViewChild('minhaDiv')
  minhaDivEL!: ElementRef<HTMLDivElement>;

  /**
   * FilhoViewchildComponent é o nome da classe do nosso componente
   * a sua tipagem, sem ElementRef de HTML, pois ele não é.
   */
  @ViewChild('filhoComp')
  filhoCompReferencia!: FilhoViewchildComponent;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.meuInputEL);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.meuInputEL);
    this.meuInputEL.nativeElement.focus();
  }

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
