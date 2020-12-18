import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersV1Component } from './orders-v1.component';

describe('OrdersV1Component', () => {
  let component: OrdersV1Component;
  let fixture: ComponentFixture<OrdersV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
