import { Component, Input } from '@angular/core';
import { PostModel } from 'src/app/post.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {

  @Input() posts: PostModel[] = [];

  constructor(){}


}
