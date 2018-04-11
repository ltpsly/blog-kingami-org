import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Article, ArticleListConfig } from '../../shared/models';
import { BlogService } from '../../shared/services/blog.service';
import * as fromBlogActions from '../store/blog.actions';
import * as fromAppReducer from '../../store/app.reducers';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }
  query: ArticleListConfig;
  posts: Article[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];
  postsState: Observable<{posts: Article[]}>;

  constructor(private blogService: BlogService, private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
  }

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.posts = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    }

    this.store.select('blogReducer')
      .subscribe((state) => {
        this.posts = state.posts;
        this.loading = false;
        console.log('test', this.posts);
      });

    // this.articlesService.query(this.query)
    // .subscribe(data => {
    //   this.loading = false;
    //   this.posts = data.articles;
    //   this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
    // });
  }

}
