import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1NewsService } from '../../../services/f1-news.service';

@Component({
  selector: 'app-f1-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './f1News.component.html',
})
export class F1NewsComponent implements OnInit {
  news: any[] = [];
  errorMessage = '';
  private timeoutId: any;

  constructor(private f1NewsService: F1NewsService) {}

  private showFallbackNews() {
    this.errorMessage = 'No se pudieron cargar las noticias de la API. Mostrando datos de ejemplo.';
    this.news = [
      { 
        title: 'Max Verstappen Gana el GP de Las Vegas',
        description: 'El piloto neerlandés consigue su victoria número 15 de la temporada en una carrera espectacular.',
        url: '#'
      },
      { 
        title: 'Ferrari Domina la Clasificación en Brasil',
        description: 'Charles Leclerc y Carlos Sainz consiguen la primera fila para la carrera del domingo.',
        url: '#'
      },
      { 
        title: 'Fernando Alonso Renueva con Aston Martin',
        description: 'El bicampeón español confirma su continuidad con el equipo británico para la próxima temporada.',
        url: '#'
      }
    ];
  }

  ngOnInit() {
    // Mostrar noticias del caché si existen
    const cached = localStorage.getItem('f1news');
    if (cached) {
      this.news = JSON.parse(cached);
      return;
    }

    // Mostrar noticias de fallback inmediatamente
    this.showFallbackNews();

    // Intentar obtener noticias reales en segundo plano
    this.f1NewsService.getRandomNews(30).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.news = data;
          this.errorMessage = '';
          localStorage.setItem('f1news', JSON.stringify(data));
        }
      },
      error: (err) => {
        console.error('Error al obtener noticias', err);
        // Ya tenemos noticias de fallback mostradas, solo actualizamos el mensaje
        this.errorMessage = 'No se pudo conectar con el servicio de noticias. Mostrando contenido de ejemplo.';
      },
  });
}
}
