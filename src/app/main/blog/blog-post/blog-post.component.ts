import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Article } from '../../shared/models';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: Article;
  loadingBPC = true;
  errorBPC = false;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        const slug = params['post'];
        if (slug !== null && slug !== undefined) {
          this.blogService.getPost(slug)
          .subscribe((post: Article) => {
            this.post = post;
            this.loadingBPC = false;
          });
        }
      });
  }

}
