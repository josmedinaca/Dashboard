import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTaskManagerComponent } from './dash-task-manager.component';

describe('DashTaskManagerComponent', () => {
  let component: DashTaskManagerComponent;
  let fixture: ComponentFixture<DashTaskManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashTaskManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashTaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
