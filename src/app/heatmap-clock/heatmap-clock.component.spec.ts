import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapClockComponent } from './heatmap-clock.component';

describe('HeatmapClockComponent', () => {
  let component: HeatmapClockComponent;
  let fixture: ComponentFixture<HeatmapClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatmapClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
