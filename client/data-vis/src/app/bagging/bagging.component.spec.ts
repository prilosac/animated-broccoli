import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggingComponent } from './bagging.component';

describe('BaggingComponent', () => {
  let component: BaggingComponent;
  let fixture: ComponentFixture<BaggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
