import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtceError500Component } from './mtce-error500.component';

describe('MtceError500Component', () => {
  let component: MtceError500Component;
  let fixture: ComponentFixture<MtceError500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtceError500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtceError500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
