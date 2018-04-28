import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaManifestComponent } from './pwa-manifest.component';

describe('PwaManifestComponent', () => {
  let component: PwaManifestComponent;
  let fixture: ComponentFixture<PwaManifestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaManifestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
