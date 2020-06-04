import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtceError403Component } from './mtce-error403.component';

describe('MtceError403Component', () => {
  let component: MtceError403Component;
  let fixture: ComponentFixture<MtceError403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtceError403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtceError403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
