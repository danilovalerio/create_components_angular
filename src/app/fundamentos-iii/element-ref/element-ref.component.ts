import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrl: './element-ref.component.scss',
})
export class ElementRefComponent implements AfterViewInit {
  @ViewChild('minhaDiv') divElemento!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.divElemento.nativeElement.style.backgroundColor = 'red';
    this.divElemento.nativeElement.textContent = 'sou uma div com element Ref';
    this.divElemento.nativeElement.classList.add('minha-class-nova-div');
  }
}
