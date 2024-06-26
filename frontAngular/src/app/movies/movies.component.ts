import { Component, inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  private readonly moviesService = inject(MoviesService)
  movies$: Observable<Movie[]> = this.moviesService.getMovies()

  trackById(index: number, movie: Movie): number {
    return movie.id ?? 0;
  }

  deleteMovie(id: number): void {
    this.moviesService.deleteMovie(id).subscribe(
      () => this.movies$ = this.moviesService.getMovies()
    );
  }

}
