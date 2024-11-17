import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleClockComponent } from './circle-clock.component';

describe('CircleClockComponent', () => {
  let component: CircleClockComponent;
  let fixture: ComponentFixture<CircleClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
