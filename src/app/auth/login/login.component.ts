import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequestPayload } from './LoginRequestPayload';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  logingRequestPayload: LoginRequestPayload;
  isError: boolean = false;
  registerMessage: string = '';

  constructor(private authService: AuthService, private router: Router
    , private activtedRoute: ActivatedRoute, private toastrService: ToastrService){
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    this.logingRequestPayload = {
      username: '',
      password: ''
    }
  }
  ngOnInit(): void {
    this.loginForm.get('username')?.addValidators(Validators.required);
    this.loginForm.get('password')?.addValidators(Validators.required);

    this.activtedRoute.queryParams.subscribe(params => {
      if(params['registered'] != undefined && params['registered'] == 'true'){
        this.registerMessage = 'Please check your email to active your account before login.'
        this.toastrService.success(`Successful Registration ${this.registerMessage}`)
        this.isError = false;
      }else{
        this.isError = true;
      }
    });
  }

  login():void{

    this.logingRequestPayload.username = this.loginForm.get('username')?.value;
    this.logingRequestPayload.password = this.loginForm.get('password')?.value;

    this.authService.login(this.logingRequestPayload).subscribe(
      (response)=> {
        console.log("Successful Login.");
        console.log(response);
        this.router.navigateByUrl('');
        this.toastrService.success("Successful Login", 'success',{progressBar: true,closeButton: true});
      },(error)=> {
        console.log(error)
        this.toastrService.error('Login Failed.')
        this.isError = true;
      }
    );
  }




}
