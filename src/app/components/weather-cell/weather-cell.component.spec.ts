import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCellComponent } from './weather-cell.component';

describe('WeatherCellComponent', () => {
  let component: WeatherCellComponent;
  let fixture: ComponentFixture<WeatherCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
