import { Component, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/interact/comment.model';
import {formatDate} from '@angular/common';
import { PostModel } from 'src/app/post.model';
import { CommentService } from 'src/app/interact/comment.service';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  isMoreMenuOpen: boolean = false;
  posts: Array<PostModel> =[]; 
  comments: Array<CommentModel> = [];
  postId: number = 0;

  constructor(
    private postService: PostService, 
    private commentService: CommentService, 
    private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.postId = parseInt(params.get('id')!, 10);
        this.getPostById(this.postId);
      }
    );
    
    this.commentService.getAllCommnetsForPostId(this.postId).subscribe(
      commnets => {
        this.comments = commnets;
      }, error => {
        console.log(error);
      }
    );  
  }

  getPostById(id: number): void{
    this.postService.getPostById(id).subscribe(
      post => {this.posts.push(post)},
      error => {console.log(error)}
    );
  }

  viewMore() {
    this.isMoreMenuOpen = !this.isMoreMenuOpen;
  }

}
