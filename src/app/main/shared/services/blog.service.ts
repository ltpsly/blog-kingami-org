import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';

import { Article } from '../models';
import { ApiService } from './api.service';

interface QueryConfig {
  path: string; //  path to collection
  field: string; // field to orderBy
  limit: number; // limit per query
  reverse: boolean; // reverse order?
  prepend: boolean; // prepend to source?
}

@Injectable()
export class BlogService {
  gPosts: Observable<Article[]>;
  tPosts: Observable<Article[]>;
  uPosts: Observable<Article[]>;
  sPosts: Observable<Article[]>;

  // Source data
  private _done = new BehaviorSubject(false);
  private _loading = new BehaviorSubject(false);
  private _data = new BehaviorSubject([]);

  private query: QueryConfig;

  // Observable data
  data: Observable<any>;
  done: Observable<boolean> = this._done.asObservable();
  loading: Observable<boolean> = this._loading.asObservable();

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

  // Initial query sets options and defines the Observable
  // passing opts will override the defaults
  init(path: string, field: string, opts?: any) {
    this.query = {
      path,
      field,
      limit: 2,
      reverse: false,
      prepend: false,
      ...opts
    };

  const first = this.afs.collection(this.query.path, ref => {
    return ref
            .orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
            .limit(this.query.limit);
  });

  this.mapAndUpdate(first);

  // Create the observable array for consumption in components
  this.data = this._data.asObservable()
    .scan( (acc, val) => {
      return this.query.prepend ? val.concat(acc) : acc.concat(val);
    });
  }


  // Retrieves additional data from firestore
  more() {
    const cursor = this.getCursor();

    const more = this.afs.collection(this.query.path, ref => {
      return ref
              .orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
              .limit(this.query.limit)
              .startAfter(cursor);
    });
    this.mapAndUpdate(more);
  }


  // Determines the doc snapshot to paginate query
  private getCursor() {
    const current = this._data.value;
    if (current.length) {
      return this.query.prepend ? current[0].doc : current[current.length - 1].doc;
    }
    return null;
  }


  // Maps the snapshot to usable format the updates source
  private mapAndUpdate(col: AngularFirestoreCollection<any>) {

    if (this._done.value || this._loading.value) { return ; }

    // loading
    this._loading.next(true);

    // Map snapshot with doc ref (needed for cursor)
    return col.snapshotChanges()
      .do(arr => {
        let values = arr.map(snap => {
          const data = snap.payload.doc.data();
          const doc = snap.payload.doc;
          return { ...data, doc };
        });

        // If prepending, reverse the batch order
        values = this.query.prepend ? values.reverse() : values;

        // update source with new values, done loading
        this._data.next(values);
        this._loading.next(false);

        // no more values, mark done
        if (!values.length) {
          this._done.next(true);
        }
    })
    .take(1)
    .subscribe();
  }

}
