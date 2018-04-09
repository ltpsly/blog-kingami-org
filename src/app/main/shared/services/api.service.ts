import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Article } from '../models';

@Injectable()
export class ApiService {

  constructor(private afs: AngularFirestore) { }

  get(): Observable<any> {
    return this.afs.collection('posts').valueChanges();
  }

}
