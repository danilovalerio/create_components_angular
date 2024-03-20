import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforComponentComponent } from './ngfor-component.component';

describe('NgforComponentComponent', () => {
  let component: NgforComponentComponent;
  let fixture: ComponentFixture<NgforComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgforComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgforComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
