import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsRepository } from '../models/news.repository';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  categories: News[];
  categoriesRep: NewsRepository;
  constructor() {
    this.categoriesRep = new NewsRepository();
    this.categories = this.categoriesRep.GetNews();
  }

  ngOnInit() {}
}
