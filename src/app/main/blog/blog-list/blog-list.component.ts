import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Article } from '../../shared/models';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  postsCollection: AngularFirestoreCollection<Article>;
  posts$: Observable<Article[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postsCollection = this.afs.collection<Article>('posts');
    this.posts$ = this.postsCollection.valueChanges();
  }

}
