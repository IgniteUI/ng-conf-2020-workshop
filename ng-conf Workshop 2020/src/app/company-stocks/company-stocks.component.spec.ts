import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CompanyStocksComponent } from './company-stocks.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

describe('CompanyStocksComponent', () => {
  let component: CompanyStocksComponent;
  let fixture: ComponentFixture<CompanyStocksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyStocksComponent],
      imports: [FormsModule, IgxCategoryChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
