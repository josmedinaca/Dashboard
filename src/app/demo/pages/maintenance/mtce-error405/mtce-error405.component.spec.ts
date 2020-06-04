import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtceError405Component } from './mtce-error405.component';

describe('MtceError405Component', () => {
  let component: MtceError405Component;
  let fixture: ComponentFixture<MtceError405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtceError405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtceError405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
