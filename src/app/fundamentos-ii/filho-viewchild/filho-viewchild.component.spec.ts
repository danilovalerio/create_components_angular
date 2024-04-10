import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoViewchildComponent } from './filho-viewchild.component';

describe('FilhoViewchildComponent', () => {
  let component: FilhoViewchildComponent;
  let fixture: ComponentFixture<FilhoViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilhoViewchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilhoViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
