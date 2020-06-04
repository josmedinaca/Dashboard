import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtceError404Component } from './mtce-error404.component';

describe('MtceError404Component', () => {
  let component: MtceError404Component;
  let fixture: ComponentFixture<MtceError404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtceError404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtceError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
