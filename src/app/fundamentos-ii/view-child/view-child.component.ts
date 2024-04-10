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
}
