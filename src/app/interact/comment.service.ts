import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }


  getAllCommnetsForPostId(id: any): Observable<Array<CommentModel>>{
    return this.http.get<Array<CommentModel>>(`http://localhost:8080/api/comments/by-postId/${id}`);
  }

  getAllCommentsForUser(name: string): Observable<Array<CommentModel>>{
    return this.http.get<Array<CommentModel>>(`http://localhost:8080/api/comments/by-user/${name}`)
  }

}
