import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  onClick(tag: string) {
    console.log('tag:  ', tag);
    this.blogService.tagSubject.next(tag);
  }

}
