import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  constructor() {
    this.movies = [
      {
        Id: 1,
        title: 'Shazam',
        description: 'Shazam description',
        imageUrl:
          'https://stackblitz.com/files/angular-qcuvmc/github/Fidan1243/MovieAppAngular/master/assets/MicrosoftTeams-image%20(3).png',
      },
      {
        Id: 2,
        title: 'Strom boy',
        description: 'Strom boy description',
        imageUrl:
          'https://stackblitz.com/files/angular-qcuvmc/github/Fidan1243/MovieAppAngular/master/assets/MicrosoftTeams-image%20(4).png',
      },
      {
        Id: 3,
        title: 'Amazing Grace Aretha Franklin',
        description: 'Amazing Grace Aretha Franklin description',
        imageUrl:
          'https://stackblitz.com/files/angular-qcuvmc/github/Fidan1243/MovieAppAngular/master/assets/MicrosoftTeams-image%20(2).png',
      },
      {
        Id: 4,
        title: 'High Life',
        description: 'High life description description',
        imageUrl:
          'https://stackblitz.com/files/angular-qcuvmc/github/Fidan1243/MovieAppAngular/master/assets/MicrosoftTeams-image%20(1).png',
      },
    ];
  }
  GetMovies(): Movie[] {
    return this.movies;
  }
  GetMovieById(id: number): Movie | undefined {
    return this.movies.find((i) => i.Id == id);
  }
}
