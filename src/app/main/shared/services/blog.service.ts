import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

import { Article } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class BlogService {
  gPosts: Observable<Article[]>;
  tPosts: Observable<Article[]>;
  uPosts: Observable<Article[]>;
  sPosts: Observable<Article[]>;

  constructor(private afs: AngularFirestore, private apiService: ApiService) { }

  getPosts(): Observable<Article[]> {
    console.log('Start of getPosts()');
    if (this.gPosts === null || this.gPosts === undefined || !this.gPosts) {
      this.gPosts = this.apiService.get();
      console.log('im here GPs');
    }
    return this.gPosts;
  }

  getPost(title: string): Observable<Article> {
    console.log('Start of getPost()');
    if (this.gPosts === null || this.gPosts === undefined) {
      this.gPosts = this.apiService.get();
      console.log('im here in GP');
    }
    return this.gPosts.map((posts) => {
      return posts.find(post => post.title === title);
    });
  }

}
