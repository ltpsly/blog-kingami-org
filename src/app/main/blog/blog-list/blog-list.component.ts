import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Article } from '../../shared/models';
import { BlogService } from '../../shared/services/blog.service';
import * as fromBlogActions from '../store/blog.actions';
import * as fromAppReducer from '../../store/app.reducers';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  // posts: Observable<Article[]>;
  postsState: Observable<{posts: Article[]}>;

  constructor(private blogService: BlogService, private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.postsState = this.store.select('blogReducer');
  }

  onLoadPosts() {
    return '';
  }

}
