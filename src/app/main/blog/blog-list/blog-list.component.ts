import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Article } from '../../shared/models';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: Observable<Article[]>;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.posts = this.blogService.getPosts();
    // this.posts.subscribe(
    //   (res) => {
    //     const post = res.find((arr) => arr.title === 'MyToy Realworld');
    //     console.log('get post test', post);
    //   }
    // );
  }

}
