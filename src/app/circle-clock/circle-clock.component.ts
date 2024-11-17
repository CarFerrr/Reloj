import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-clock',
  standalone: true,
  templateUrl: './circle-clock.component.html',
  styleUrls: ['./circle-clock.component.css']
})
export class CircleClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  hourText: string = '';
  minuteText: string = '';
  secondText: string = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.hours = (now.getHours() % 12) / 12 * 100;
    this.minutes = now.getMinutes() / 60 * 100;
    this.seconds = now.getSeconds() / 60 * 100;

    // Actualizar los textos dentro de los círculos
    this.hourText = String(now.getHours()).padStart(2, '0');
    this.minuteText = String(now.getMinutes()).padStart(2, '0');
    this.secondText = String(now.getSeconds()).padStart(2, '0');
  }
}