import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-clock',
  standalone: true,
  templateUrl: './binary-clock.component.html',
  styleUrls: ['./binary-clock.component.css']
})
export class BinaryClockComponent implements OnInit {
  binaryHours: string[] = [];
  binaryMinutes: string[] = [];
  binarySeconds: string[] = [];

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.binaryHours = this.toBinaryArray(now.getHours(), 4);
    this.binaryMinutes = this.toBinaryArray(now.getMinutes(), 6);
    this.binarySeconds = this.toBinaryArray(now.getSeconds(), 6);
  }

  toBinaryArray(num: number, length: number): string[] {
    return num.toString(2).padStart(length, '0').split('');
  }
}