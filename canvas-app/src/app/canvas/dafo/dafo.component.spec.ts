import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DafoComponent } from './dafo.component';

describe('DafoComponent', () => {
  let component: DafoComponent;
  let fixture: ComponentFixture<DafoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
