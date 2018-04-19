import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../shared/services/blog.service';
import { Article } from '../../shared/models';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {
  posts: Article[];
  loadingBLC = true;
  errorBLC = false;
  testPosts: Article[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    console.log('BlogListComponent');
    this.getPosts();
  }

  getPosts() {
    console.log('getpost in BLC...');
    this.blogService.getPosts()
      .subscribe(
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
