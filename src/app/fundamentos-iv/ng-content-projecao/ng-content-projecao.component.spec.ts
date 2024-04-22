import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentProjecaoComponent } from './ng-content-projecao.component';

describe('NgContentProjecaoComponent', () => {
  let component: NgContentProjecaoComponent;
  let fixture: ComponentFixture<NgContentProjecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgContentProjecaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgContentProjecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
