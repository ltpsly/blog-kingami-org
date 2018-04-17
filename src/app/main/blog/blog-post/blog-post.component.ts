import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Article } from '../../shared/models';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: Article;
  loadingBPC: true;
  errorBPC: false;

  constructor() { }

  ngOnInit() {
  }

}
