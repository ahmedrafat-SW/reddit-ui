import { Component, Input } from '@angular/core';
import { CommentModel } from '../comment.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-commnet',
  templateUrl: './commnet.component.html',
  styleUrls: ['./commnet.component.css']
})
export class CommnetComponent {

  @Input() commentList: Array<CommentModel> = [];


  

}
