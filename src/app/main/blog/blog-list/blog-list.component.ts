import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Article, ArticleListConfig } from '../../shared/models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: Article[];
  loadingBLC = true;
  errorBLC = false;

  constructor() { }

  ngOnInit() {
  }

}
