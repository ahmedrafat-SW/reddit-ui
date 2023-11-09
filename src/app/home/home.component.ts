import { Component } from '@angular/core';
import { PostModel } from '../post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts: Array<PostModel> = [];

  constructor(private postSerivce: PostService){
    this.postSerivce.getAllPosts().subscribe(
      data => {this.posts = data;},
      error => {console.log(error);}
    );

  }



}
