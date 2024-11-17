import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-clock',
  standalone: true,
  templateUrl: './flip-clock.component.html',
  styleUrls: ['./flip-clock.component.css']
})
export class FlipClockComponent implements OnInit {
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000); // Actualiza cada segundo
  }

  updateTime() {
    const now = new Date();
    this.hours = this.padZero(now.getHours());
    this.minutes = this.padZero(now.getMinutes());
    this.seconds = this.padZero(now.getSeconds());
  }

  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}