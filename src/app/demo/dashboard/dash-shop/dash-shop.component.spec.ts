import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashShopComponent } from './dash-shop.component';

describe('DashShopComponent', () => {
  let component: DashShopComponent;
  let fixture: ComponentFixture<DashShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
