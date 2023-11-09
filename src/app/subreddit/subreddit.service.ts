import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubredditModel } from './view-subreddit/subreddit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  subreddits: Array<SubredditModel> = [];

  constructor(private http: HttpClient) {}

  getAllSubreddits():Observable<Array<SubredditModel>>{
    return this.http.get<Array<SubredditModel>>("http://localhost:8080/api/subreddit");
  }
}
