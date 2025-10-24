import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { HealthService } from './health.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  result = signal<string>('');

  constructor(private health: HealthService) {}

  check() {
    this.health.ping().subscribe({
      next: (r) => this.result.set(r),
      error: (e) => this.result.set('error: ' + (e?.message ?? e))
    });
  }
}