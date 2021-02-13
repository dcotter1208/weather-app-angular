import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherCellComponent } from './today-weather-cell.component';

describe('TodayWeatherCellComponent', () => {
  let component: TodayWeatherCellComponent;
  let fixture: ComponentFixture<TodayWeatherCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayWeatherCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWeatherCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
