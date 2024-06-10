import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.scss'
})
export class UpdateMovieComponent implements OnInit {
  private readonly moviesService = inject(MoviesService)
  private readonly router = inject(Router)
  private movieId: string | undefined;
  releaseDateStr: string = '';

  movie: Movie = {
    title: '',
    director: '',
    releaseDate: new Date(),
    synopsis: '',
    id: undefined,
    rate: undefined,
    image: undefined
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.moviesService.getMovie(this.movieId).subscribe(movie => {
        this.movie = movie;
        this.releaseDateStr = new Date(movie.releaseDate).toISOString().slice(0, 10);
      });
    });
  }

  updateMovie() {
    this.moviesService.updateMovie(this.movie).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }

  updateReleaseDate(event: any) {
    const dateStr = event?.target?.value;
    if (dateStr) {
      this.movie.releaseDate = new Date(dateStr);
    }
  }
}
