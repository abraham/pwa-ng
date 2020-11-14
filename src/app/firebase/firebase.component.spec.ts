import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FirebaseComponent } from './firebase.component';

describe('FirebaseComponent', () => {
  let component: FirebaseComponent;
  let fixture: ComponentFixture<FirebaseComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FirebaseComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
