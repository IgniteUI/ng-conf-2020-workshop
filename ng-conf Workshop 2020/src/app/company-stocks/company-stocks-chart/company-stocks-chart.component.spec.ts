import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStocksChartComponent } from './company-stocks-chart.component';

describe('CompanyStocksChartComponent', () => {
  let component: CompanyStocksChartComponent;
  let fixture: ComponentFixture<CompanyStocksChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyStocksChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyStocksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
