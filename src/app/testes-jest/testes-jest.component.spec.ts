import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesJestComponent } from './testes-jest.component';

describe('TestesJestComponent', () => {
  let component: TestesJestComponent;
  let fixture: ComponentFixture<TestesJestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestesJestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestesJestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
