import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

import { Article } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class BlogService {
  posts: Observable<Article[]>;

  constructor(private afs: AngularFirestore, private apiService: ApiService) { }

  getPosts(): Observable<Article[]> {
    if (this.posts === null || this.posts === undefined) {
      this.posts = this.apiService.get();
      console.log('test posts', typeof this.posts);
      return this.posts;
    }
    return this.posts;
  }

  getPost(title: string): Article {
    let post: Article;
    console.log('im here in getpost');
    if (this.posts === null || this.posts === undefined) {
      console.log('something went wrong');
    } else {
      console.log('im here jkl');
      this.posts.subscribe(
        (res) => {
          console.log('im here');
          post = res.find((arr) => arr.title === title);
          return post;
        }
      );
    }
    console.log('something went wrong very ');
    // return this.posts.subscribe(
    //   (res) => {
    //     res.find()
    //   });
    return post;
  }

}
