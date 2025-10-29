import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class F1NewsService {
  private apiUrl = 'https://f1-news1.p.rapidapi.com/f1news/0/0';

  constructor(private http: HttpClient) {}

  getRandomNews(count: number = 30): Observable<any[]> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'f1-news1.p.rapidapi.com',
      'x-rapidapi-key': '6be974c590msh32324754d3360d8p1cd223jsn376c4e67c5e0'
    });

     return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map(response => {
        const newsArray = response.F1News || [];

        if (!Array.isArray(newsArray)) {
          console.error('Error: F1News no es un array');
          return [];
        }

        // Mezclamos y seleccionamos 30 noticias aleatorias
        return newsArray
          .sort(() => Math.random() - 0.5)
          .slice(0, count);
      })
    );
  }
}
