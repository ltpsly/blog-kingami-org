import { Component, OnInit } from '@angular/core';
import { Comment } from '../../shared/models';

@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.css']
})
export class BlogCommentComponent implements OnInit {
  comment: Comment;
  constructor() { }

  ngOnInit() {
  }

}
