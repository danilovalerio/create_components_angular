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
  }
}
