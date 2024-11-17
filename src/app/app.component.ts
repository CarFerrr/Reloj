import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { ProgressClockComponent } from './progress-clock/progress-clock.component';
import { CircleClockComponent } from './circle-clock/circle-clock.component';
import { TextClockComponent } from './text-clock/text-clock.component';
import { BinaryClockComponent } from './binary-clock/binary-clock.component';
import { FlipClockComponent } from './flip-clock/flip-clock.component';
import { LedClockComponent } from './led-clock/led-clock.component';
import { HeatmapClockComponent } from './heatmap-clock/heatmap-clock.component';
import { CalendarClockComponent } from './calendar-clock/calendar-clock.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DigitalClockComponent,
    AnalogClockComponent,
    ProgressClockComponent, 
    CircleClockComponent,
    TextClockComponent,
    BinaryClockComponent,
    FlipClockComponent,
    LedClockComponent,
    HeatmapClockComponent,
    CalendarClockComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedClock: string = 'digital'; // Valor inicial
}