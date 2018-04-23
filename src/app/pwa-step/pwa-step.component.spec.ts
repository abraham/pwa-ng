import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaStepComponent } from './pwa-step.component';

describe('PwaStepComponent', () => {
  let component: PwaStepComponent;
  let fixture: ComponentFixture<PwaStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
