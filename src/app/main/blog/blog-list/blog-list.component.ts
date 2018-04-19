import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../shared/models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() posts: Article[];

  constructor() { }

  ngOnInit() {
  }

}
