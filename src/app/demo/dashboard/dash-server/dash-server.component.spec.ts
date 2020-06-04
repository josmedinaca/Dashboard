import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashServerComponent } from './dash-server.component';

describe('DashServerComponent', () => {
  let component: DashServerComponent;
  let fixture: ComponentFixture<DashServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
