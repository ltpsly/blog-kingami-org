import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';

import { Article } from '../models';

@Injectable()
export class BlogService {
  postsCollection: AngularFirestoreCollection<Article>;
  postsDocument: AngularFirestoreDocument<Article>;
  posts$: Observable<Article[]>;
  posts: Article[];

  constructor(private afs: AngularFirestore) {
    console.log('BlogService');
    this.postsCollection = afs.collection('posts');
    this.postsCollection.valueChanges().subscribe(res => this.posts = res);
    this.posts$ = this.postsCollection.valueChanges();
  }

  // getPosts() {
  //   return this.posts;
  // }

  getPosts(): Observable<Article[]> {
    console.log('BlogService getPosts()');
    console.log('res: this.posts  ', this.posts$);
    this.posts$.subscribe(res => console.log('res:  ', res));
    return this.posts$;
  }

  getPost(id: string) {
    return this.posts;
  }

}
