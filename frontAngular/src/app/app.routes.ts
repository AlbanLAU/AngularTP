import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/add', component: AddMovieComponent},
  {path: 'movies/edit/:id', component: UpdateMovieComponent}
];

