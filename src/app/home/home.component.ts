import { Component, Host, HostListener } from '@angular/core';
import { PostModel } from '../post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts: Array<PostModel> = [];
  showBackBtn:boolean = false;

  constructor(private postSerivce: PostService){
    this.postSerivce.getAllPosts().subscribe(
      data => {this.posts = data;},
      error => {console.log(error);}
    );
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(){
    this.showBackBtn = window.scrollY > 10;
    console.log(window.scrollY)
  }
  


}
