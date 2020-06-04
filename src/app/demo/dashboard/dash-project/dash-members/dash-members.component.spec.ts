import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMembersComponent } from './dash-members.component';

describe('DashMembersComponent', () => {
  let component: DashMembersComponent;
  let fixture: ComponentFixture<DashMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
