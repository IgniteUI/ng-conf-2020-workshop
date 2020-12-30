import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersGridComponent } from './customers-grid.component';

describe('CustomersGridComponent', () => {
  let component: CustomersGridComponent;
  let fixture: ComponentFixture<CustomersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
