import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';

import { Article } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class BlogService {

  tagSubject = new BehaviorSubject(null);

  constructor(private afs: AngularFirestore, private apiService: ApiService) { }

}
