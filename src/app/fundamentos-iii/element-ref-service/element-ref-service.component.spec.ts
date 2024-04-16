import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRefServiceComponent } from './element-ref-service.component';

describe('ElementRefServiceComponent', () => {
  let component: ElementRefServiceComponent;
  let fixture: ComponentFixture<ElementRefServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementRefServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementRefServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
