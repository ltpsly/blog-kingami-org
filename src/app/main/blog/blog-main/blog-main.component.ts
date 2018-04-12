import { Component, OnInit } from '@angular/core';

import { ArticleListConfig } from '../../shared/models';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {
  listConfig: ArticleListConfig;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.setListTo('all');
    this.blogService.tagSubject
      .subscribe((tag) => {
        console.log('tag inside blog main', tag);
        this.setListTo('all', {tag: tag});
      });
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
