import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { FormsModule }   from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  value: string = '';
  valueUpdate = new Subject<string>();
  buscando: boolean = false;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.posts()
    .subscribe(posts => {
      this.posts = this.posts.concat(posts);
    });
    this.valueUpdate.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        this.buscando = true;
        this.search(value);
      });
    
  }

  search(value: string){
    this.postService.search(value)
    .subscribe(posts => {
      console.log(posts);
      this.posts = posts;
      this.buscando = false;
    });
  }


}
