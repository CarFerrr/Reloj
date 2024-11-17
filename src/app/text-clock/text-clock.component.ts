import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-clock',
  standalone: true,
  templateUrl: './text-clock.component.html',
  styleUrls: ['./text-clock.component.css']
})
export class TextClockComponent implements OnInit {
  timeText: string = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 60000);
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    this.timeText = `Son las ${formattedHours} y ${minutes} ${period}`;
  }
}