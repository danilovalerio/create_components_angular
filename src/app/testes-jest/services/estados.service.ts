import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  //exemplos de https://consolelog.com.br/teste-unitario-angular-jest-em-services-que-efetuam-requisicoes-http/
  constructor(private httpClient: HttpClient) {}

  listar(): Observable<any[]> {
    return this.httpClient.get<any[]>(url);
  }
}
