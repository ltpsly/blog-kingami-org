import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Article, ArticleListConfig } from '../../shared/models';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: Article[];
  loadingBLC = true;
  errorBLC = false;
  testPosts: Article[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    console.log('BlogListComponent');
    // this.posts = this.blogService.getPosts();
    this.getPosts().subscribe(res =>  res);
  }

  getPosts() {
    return this.blogService.getPosts()
            .map(
              (response: Article[]) => {
                console.log('testPosts', response);
                this.posts = response;
                this.loadingBLC = false;
              },
              (error) => {
                this.errorBLC = true;
              }
            );
  }

}
