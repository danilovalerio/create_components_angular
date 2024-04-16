import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesJestComponent } from './testes-jest.component';
import { EstadosService } from './services/estados.service';
import { Observable } from 'rxjs';

// Dados que serao retornados pela nossa classe de mock (MockEstadosService)
let mockEstadosServiceData: Observable<any[]> | null = null;

class MockEstadosService {
  listar(): Observable<any[]> | null {
    return mockEstadosServiceData;
  }
}

describe('TestesJestComponent', () => {
  let component: TestesJestComponent;
  let fixture: ComponentFixture<TestesJestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TestesJestComponent],
      providers: [
        // IMPORTANTE
        // Aqui dizemos ao Angular que toda vez que EstadosService
        // for solicitada, será entregue a classe MockEstadosService
        { provide: EstadosService, useClass: MockEstadosService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestesJestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
