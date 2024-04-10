import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.scss',
})
export class ViewChildrenComponent implements AfterViewInit {
  buttonList = ['Botão 1', 'Botão 2', 'Botão 3'];

  @ViewChildren('meuBotao')
  botoesEl!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit() {
    console.log(this.botoesEl);
    console.log(this.botoesEl.toArray());

    const primeiro = this.botoesEl.toArray()[0];

    /**
     * Primeiro item da lista recebe o bgColor azul
     */
    primeiro.nativeElement.style.backgroundColor = 'blue';
    primeiro.nativeElement.style.color = 'white';
  }

  changeColor(event: Event) {
    console.log(event);

    /**
     * .target permite acessar a referência do elemento
     */
    const btnElement = event.target as HTMLButtonElement;

    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  resetButtons() {
    /**
     * Itera pela lista dos botões
     */
    this.botoesEl.forEach((btn) => {
      btn.nativeElement.style.backgroundColor = '';
      btn.nativeElement.style.color = 'black';
    });
  }
}
