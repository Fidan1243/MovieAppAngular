import { News } from './news';

export class NewsRepository {
  private news_array: News[];

  constructor() {
    this.news_array = [
      {
        Id: 1,
        MovieId: 1,
        title: 'New Record',
        authors: 'John',
        CreatedDate: new Date(),
      },
      {
        Id: 2,
        MovieId: 2,
        title: 'The best drama',
        authors: 'Jordan',
        CreatedDate: new Date(),
      },
      {
        Id: 3,
        MovieId: 2,
        title: 'The best film of the year',
        authors: 'Michael',
        CreatedDate: new Date(),
      },
      {
        Id: 4,
        MovieId: 3,
        title: 'The best historical film',
        authors: 'Thomas',
        CreatedDate: new Date(),
      },
    ];
  }
  GetNews(): News[] {
    return this.news_array;
  }
  AddNews(news: News) {
    this.news_array.push(news);
  }
  DeleteNews(news: News) {
    this.news_array.splice(news.Id, 1);
  }
}
