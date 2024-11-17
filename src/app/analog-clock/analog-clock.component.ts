import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  standalone: true,
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000); // Actualiza cada segundo
  }

  updateClock() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    ctx.clearRect(0, 0, 200, 200);

    // Fondo del reloj
    ctx.fillStyle = '#0a2e5c'; // Azul oscuro similar al del reloj Lotus
    ctx.beginPath();
    ctx.arc(100, 100, 95, 0, Math.PI * 2);
    ctx.fill();

    // Dibuja los marcadores
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    for (let i = 0; i < 60; i++) {
      const angle = (i * Math.PI) / 30;
      const x1 = 100 + Math.cos(angle) * 80;
      const y1 = 100 + Math.sin(angle) * 80;
      const x2 = 100 + Math.cos(angle) * 90;
      const y2 = 100 + Math.sin(angle) * 90;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Marcadores de las horas
    ctx.lineWidth = 4;
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6;
      const x1 = 100 + Math.cos(angle) * 70;
      const y1 = 100 + Math.sin(angle) * 70;
      const x2 = 100 + Math.cos(angle) * 90;
      const y2 = 100 + Math.sin(angle) * 90;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Manecilla de las horas
    const hourAngle = ((hours % 12) + minutes / 60) * (Math.PI / 6);
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100 + Math.cos(hourAngle) * 50, 100 + Math.sin(hourAngle) * 50);
    ctx.stroke();

    // Manecilla de los minutos
    const minuteAngle = (minutes + seconds / 60) * (Math.PI / 30);
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100 + Math.cos(minuteAngle) * 70, 100 + Math.sin(minuteAngle) * 70);
    ctx.stroke();

    // Manecilla de los segundos
    const secondAngle = seconds * (Math.PI / 30);
    ctx.strokeStyle = '#ff0000'; // Manecilla roja para los segundos
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100 + Math.cos(secondAngle) * 80, 100 + Math.sin(secondAngle) * 80);
    ctx.stroke();

    // Punto central
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(100, 100, 5, 0, Math.PI * 2);
    ctx.fill();
  }
}