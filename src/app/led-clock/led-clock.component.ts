import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-led-clock',
  standalone: true,
  templateUrl: './led-clock.component.html',
  styleUrls: ['./led-clock.component.css']
})
export class LedClockComponent implements OnInit {
  time: string = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.time = `${hours}:${minutes}:${seconds}`;
  }
}