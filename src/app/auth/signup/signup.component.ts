import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SignUpPayload} from "./SignUpRequestPayload";
import {AuthService} from "../auth.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup | any;
  payload: SignUpPayload;
  constructor(private authService: AuthService,
     private router: Router, private toastrService: ToastrService){
    this.signUpForm = {email: '', username: '', password: ''};
    this.payload = {email: '', username: '', password: ''};
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
        username: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", Validators.required)
      });
  }

  signUp():void{
    this.payload.email = this.signUpForm.get('email').value;
    this.payload.username = this.signUpForm.get('username').value;
    this.payload.password = this.signUpForm.get('password').value;

    this.authService.signup(this.payload!).subscribe(()=> {
      console.log("Successful registration.")
      this.router.navigate(['/login'], {queryParams: {registered: 'true'}});
    },()=> {
        console.log("Registration Failed.");
        this.toastrService.success('Registration Failed.');
    });
  }


  protected readonly onsubmit = onsubmit;
}
