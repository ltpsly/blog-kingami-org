import { Component, OnInit } from '@angular/core';

import { ArticleListConfig } from '../../shared/models';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {
  listConfig: ArticleListConfig;

  constructor() { }

  ngOnInit() {
    this.setListTo('all');
  }

  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    // if (type === 'feed') {
      // this.router.navigateByUrl('/login');
      // return;
    // }

console.log('setting to', type);

    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  }

}
