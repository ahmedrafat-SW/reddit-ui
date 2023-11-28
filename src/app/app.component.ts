import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddit';

 docCliked(): void {
    document.body.addEventListener("click",function(event){
      console.log(event.target)
      alert(event.target)
    })
 }
}
