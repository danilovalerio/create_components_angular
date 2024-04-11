import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss',
})
export class SemDiretivaComponent {
  @ViewChild('meuP')
  pSemDiretivaRef!: ElementRef<HTMLParagraphElement>;

  onMouseOver() {
    console.log('Opa passou sobre');
    this.pSemDiretivaRef.nativeElement.style.backgroundColor = 'yellow';
  }

  mouseFora() {
    console.log('Opa mouse está fora');
    this.pSemDiretivaRef.nativeElement.style.backgroundColor = '';
  }
}
