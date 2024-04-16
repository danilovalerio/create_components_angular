import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { TesteService } from '../../services/teste.service';

@Component({
  selector: 'app-element-ref-service',
  templateUrl: './element-ref-service.component.html',
  styleUrl: './element-ref-service.component.scss',
})
export class ElementRefServiceComponent implements OnInit, AfterViewInit {
  constructor(
    private readonly _elementoRef: ElementRef,
    private readonly _testeService: TesteService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
