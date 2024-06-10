import { Component, inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  private readonly moviesService = inject(MoviesService)
  movies$: Observable<Movie[]> = this.moviesService.getMovies()

  trackById(index: number, movie: Movie): number {
    return movie.id ?? 0;
  }
}
