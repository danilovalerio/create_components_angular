import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XssExemploComponent } from './xss-exemplo.component';

describe('XssExemploComponent', () => {
  let component: XssExemploComponent;
  let fixture: ComponentFixture<XssExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XssExemploComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XssExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
