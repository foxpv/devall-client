import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  value: string = '';

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.posts()
    .subscribe(posts => {
      //this.filter = '';
      this.posts = this.posts.concat(posts);
    })
  }

}
