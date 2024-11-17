import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarClockComponent } from './calendar-clock.component';

describe('CalendarClockComponent', () => {
  let component: CalendarClockComponent;
  let fixture: ComponentFixture<CalendarClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
