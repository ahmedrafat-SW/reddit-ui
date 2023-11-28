import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interact',
  templateUrl: './user-interact.component.html',
  styleUrls: ['./user-interact.component.css']
})
export class InteractComponent {

  @Input() postId: number = 0;

  constructor(private router: Router){}

  viewComments() {
    this.router.navigate(['/post-details/', this.postId])
  }

}
