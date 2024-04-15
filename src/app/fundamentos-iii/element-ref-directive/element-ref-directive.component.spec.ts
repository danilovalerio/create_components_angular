import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRefDirectiveComponent } from './element-ref-directive.component';

describe('ElementRefDirectiveComponent', () => {
  let component: ElementRefDirectiveComponent;
  let fixture: ComponentFixture<ElementRefDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementRefDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementRefDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
