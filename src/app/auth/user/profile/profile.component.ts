import { Component } from '@angular/core';
import { PostModel } from 'src/app/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  posts: Array<PostModel> = [
    {
      id: 1,
      postName: 'test post',
      description: "post description",
      commentCount: 4,
      subredditName: 'subreddit',
      url: 'url',
      username: 'user',
      voteCount: 4,
      duration: '2 days ago',
      downVote: true,
      upVote: false
    }
  ]
  
  isPostViewed: boolean = false;
  isSubredditViewed: boolean = false;
  isCommentViewed: boolean = false;
  constructor(){}
  
  displayPosts():void {
    this.isPostViewed = true;
    this.isCommentViewed = false;
    this.isSubredditViewed = false;
  }

  displaySubreddits() {
    this.isSubredditViewed = true;
    this.isPostViewed = false;
    this.isCommentViewed = false;
  }

  displayComments(){
    this.isCommentViewed = true;
    this.isPostViewed = false;
    this.isSubredditViewed = false;
  }
}
