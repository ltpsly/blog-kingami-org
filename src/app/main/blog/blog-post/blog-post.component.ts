import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../../shared/services/blog.service';
import { Article } from '../../shared/models';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: Article;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     const title = params['title'];
    //     console.log('get post test title', title);
    //     this.blogService.getPosts().subscribe(
    //       (res) => {
    //         this.post = res.find((arr) => arr.title === 'MyToy Realworld');
    //         console.log('get post test in post component', this.post);
    //       }
    //     );
    //   }
    // );
  }

}
