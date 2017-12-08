import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCanvasModelComponent } from './business-canvas-model.component';

describe('BusinessCanvasModelComponent', () => {
  let component: BusinessCanvasModelComponent;
  let fixture: ComponentFixture<BusinessCanvasModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCanvasModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCanvasModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
