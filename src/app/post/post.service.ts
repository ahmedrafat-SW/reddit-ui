import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private httpClient: HttpClient) { }


  getAllPosts(): Observable<Array<PostModel>>{
    return this.httpClient.get<Array<PostModel>>("http://localhost:8080/api/posts");
  }



}
