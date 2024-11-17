import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-clock',
  standalone: true,
  templateUrl: './calendar-clock.component.html',
  styleUrls: ['./calendar-clock.component.css']
})
export class CalendarClockComponent implements OnInit {
  time: string = '';
  date: string = '';
  dayOfWeek: string = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();

    // Hora en formato HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.time = `${hours}:${minutes}:${seconds}`;

    // Día de la semana
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    this.dayOfWeek = daysOfWeek[now.getDay()];

    // Fecha en formato DD/MM/YYYY
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11
    const year = now.getFullYear();
    this.date = `${day}/${month}/${year}`;
  }
}