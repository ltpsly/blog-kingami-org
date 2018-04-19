import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';

import { Article } from '../models';

@Injectable()
export class BlogService {
  postsCollection: AngularFirestoreCollection<Article>;
  postsDocument: AngularFirestoreDocument<Article>;

  constructor(private afs: AngularFirestore) {
    console.log('BlogService');
    this.postsCollection = afs.collection('posts');
  }

  getPosts(): Observable<Article[]> {
    console.log('BlogService getPosts()');
    return this.postsCollection.valueChanges();
  }

  getPost(slug: string) {
    return this.afs.collection('posts', ref => {
      return ref.where('slug', '==', slug).limit(1);
    })
    .valueChanges()
    .map(response => {
      return response[0];
    });
  }

}
