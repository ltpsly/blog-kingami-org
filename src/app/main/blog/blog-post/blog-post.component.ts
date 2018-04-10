import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { BlogService } from '../../shared/services/blog.service';
import { Article } from '../../shared/models';
import * as fromBlogActions from '../store/blog.actions';
import * as fromAppReducer from '../../store/app.reducers';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: Observable<Article>;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromAppReducer.AppState>,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        let title = params['post'];
        console.log('get post test title', title);
        this.store.select('blogReducer')
        .map((res) => {
          // title = 'test';
          title = 'MyToy Realworldd';
          return Observable.of(res.posts.find((post) => post.title === title));
        })
        .subscribe((post) => {
          if (post !== null || post !== undefined || !post ) {
            console.log('im here inside if check', post);
            this.post = post;
          } else {
            console.log('im here inside dispatch');
            this.store.dispatch(new fromBlogActions.GetPost(title));
            this.post = this.store.select('blogReducer').map(res => res.post);
          }
        });
      }
    );
  }

}
