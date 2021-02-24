import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCityCardComponent } from './featured-city-card.component';

describe('FeaturedCityCardComponent', () => {
  let component: FeaturedCityCardComponent;
  let fixture: ComponentFixture<FeaturedCityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
