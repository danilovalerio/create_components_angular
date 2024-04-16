import { Component, OnInit } from '@angular/core';
import { EstadosService } from './services/estados.service';

@Component({
  selector: 'app-testes-jest',
  templateUrl: './testes-jest.component.html',
  styleUrl: './testes-jest.component.scss',
})
export class TestesJestComponent implements OnInit {
  estados: any = [];
  ocorreuErro: boolean = false;

  constructor(private estadosService: EstadosService) {}

  ngOnInit() {
    this.estadosService.listar().subscribe(
      (listaEstados) => {
        this.ocorreuErro = false;
        this.estados = listaEstados;
      },
      (error) => {
        console.error('Erro ao obter os registros', error);
        this.ocorreuErro = true;
      }
    );
  }
}
