import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BlogService } from '../../shared/services/blog.service';
import * as fromBlogActions from '../store/blog.actions';
import * as fromAppReducer from '../../store/app.reducers';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  constructor(private blogService: BlogService, private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    console.log('BlogHomeComponent');
    this.store.dispatch(new fromBlogActions.LoadPosts());
    // this.blogService.getPosts();
  }

}
