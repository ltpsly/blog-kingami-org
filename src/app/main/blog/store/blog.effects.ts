import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import * as FromBlogActions from './blog.actions';
import { Article } from '../../shared/models';

@Injectable()
export class BlogEffects {

    constructor(
        private actions$: Actions,
        private afs: AngularFirestore
    ) { }

    @Effect()
    blogLoadPosts = this.actions$
    .ofType(FromBlogActions.LOAD_POSTS)
    .map((action: FromBlogActions.LoadPosts) => {
        return '';
    })
    .switchMap((options: any) => {
        return Observable.of(this.afs.collection<Article>('posts'));
    })
    .mergeMap((postsCollection) => {
        return postsCollection.valueChanges()
            .map((posts) => {
                console.log('posts in effects:    ', posts);
                return {
                    type: FromBlogActions.POSTS,
                    payload: posts
                };
            })
            .catch((error) => {
                console.log('error in retrieving posts', error);
                return Observable.of(error);
            });
    });

    @Effect()
    blogLoadPost = this.actions$
    .ofType(FromBlogActions.GET_POST)
    .map((action: FromBlogActions.GetPost) => {
        return action.payload;
    })
    .switchMap((options: any) => {
        return Observable.of(this.afs.collection<Article>('posts'));
    })
    .mergeMap((postsCollection) => {
        return postsCollection.valueChanges()
            .map((posts) => {
                console.log('post in effect: post   ', posts[0]);
                return {
                    type: FromBlogActions.POST,
                    payload: posts[0]
                };
            })
            .catch((error) => {
                console.log('error in retrieving posts', error);
                return Observable.of(error);
            });
    });
}
