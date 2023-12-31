import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit{

  isMenuOpen: boolean = false;
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.authService.LoggedIn.subscribe((data: boolean)=> this.isLoggedIn = true);
    this.authService.username.subscribe((data: string)=> this.username = data);
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUsername();
  }

  goToProfile(): void{
    this.router.navigateByUrl(`/user-profile`);
  }

  logout(): void{
    this.isLoggedIn = false;
    this.authService.logout();
    this.router.navigateByUrl('');
  }

  viewMenu():void{
    this.isMenuOpen = true;
  }
  hideMenu(): void{
    this.isMenuOpen = false;
    console.log("hide menu invoked");
    
  }
  
  


}
