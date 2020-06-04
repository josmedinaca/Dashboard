import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashStatisticsComponent } from './dash-statistics.component';

describe('DashStatisticsComponent', () => {
  let component: DashStatisticsComponent;
  let fixture: ComponentFixture<DashStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
