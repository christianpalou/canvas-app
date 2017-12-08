import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagCanvasComponent } from './bag-canvas.component';

describe('BagCanvasComponent', () => {
  let component: BagCanvasComponent;
  let fixture: ComponentFixture<BagCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
