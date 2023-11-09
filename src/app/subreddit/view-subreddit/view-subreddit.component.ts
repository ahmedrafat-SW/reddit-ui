import { Component } from '@angular/core';
import { SubredditModel } from './subreddit.model';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-view-subreddit',
  templateUrl: './view-subreddit.component.html',
  styleUrls: ['./view-subreddit.component.css']
})
export class ViewSubredditComponent {

  subreddits: Array<SubredditModel> = [];
  displayAll: boolean = false;

  constructor(private subredditService: SubredditService){
    this.subredditService.getAllSubreddits().subscribe(
      data => {
        if(data.length > 3){
          this.subreddits = data.splice(0, 3);
          this.displayAll = true;
        }else{
          this.subreddits = data;
        }
      },
      error => {console.log(error);
      }
    );
  }

}
