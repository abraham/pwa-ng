import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CBComponent } from './c-b.component';

describe('CBComponent', () => {
  let component: CBComponent;
  let fixture: ComponentFixture<CBComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CBComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
