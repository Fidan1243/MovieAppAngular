import { MovieRepository } from './movie.repository';
import { News } from './news';

export class NewsRepository {
  private news_array: News[];
  private movieRep: MovieRepository;
  constructor() {
    this.movieRep = new MovieRepository();
    this.news_array = [
      {
        Id: 1,
        MovieId: 1,
        title: 'New Record',
        authors: 'John',
        CreatedDate: new Date(),
        imageUrl: this.movieRep.GetMovieById(1).imageUrl,
      },
      {
        Id: 2,
        MovieId: 2,
        title: 'The best drama',
        authors: 'Jordan',
        CreatedDate: new Date(),
        imageUrl: this.movieRep.GetMovieById(2).imageUrl,
      },
      {
        Id: 3,
        MovieId: 2,
        title: 'The best film of the year',
        authors: 'Michael',
        CreatedDate: new Date(),
        imageUrl: this.movieRep.GetMovieById(2).imageUrl,
      },
      {
        Id: 4,
        MovieId: 3,
        title: 'The best documentary film',
        authors: 'Thomas',
        CreatedDate: new Date(),
        imageUrl: this.movieRep.GetMovieById(3).imageUrl,
      },
    ];
  }
  GetNews(): News[] {
    return this.news_array;
  }
  AddNews(news: News) {
    this.news_array.push(news);
  }
  DeleteNews(id: number) {
    this.news_array.splice(id, 1);
  }
}
