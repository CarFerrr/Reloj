import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap-clock',
  standalone: true,
  templateUrl: './heatmap-clock.component.html',
  styleUrls: ['./heatmap-clock.component.css']
})
export class HeatmapClockComponent implements OnInit {
  hourColor: string = '';
  minuteColor: string = '';
  secondColor: string = '';

  ngOnInit() {
    setInterval(() => this.updateColors(), 1000);
  }

  updateColors() {
    const now = new Date();
    this.hourColor = this.getColor(now.getHours(), 24);
    this.minuteColor = this.getColor(now.getMinutes(), 60);
    this.secondColor = this.getColor(now.getSeconds(), 60);
  }

  getColor(value: number, max: number): string {
    const hue = (value / max) * 120;
    return `hsl(${hue}, 100%, 50%)`;
  }
}