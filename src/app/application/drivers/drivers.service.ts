import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio sea global
})
export class MyService {

  constructor(private http: HttpClient) { }

  getDrivers() {
    return this.http.get('/api/drivers');

    }
}