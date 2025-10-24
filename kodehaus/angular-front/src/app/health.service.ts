import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE = '/api'; // usa proxy.conf.json

@Injectable({ providedIn: 'root' })
export class HealthService {
  constructor(private http: HttpClient) {}
  ping(): Observable<string> {
    return this.http.get(`${API_BASE}/healthz`, { responseType: 'text' });
  }
}