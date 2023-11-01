import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import {Observable, map} from "rxjs";
import {SignUpPayload} from "./signup/SignUpRequestPayload";
import { LoginRequestPayload } from './login/LoginRequestPayload';
import { LoginResponse } from './login/LoginResponse';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() LoggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();


  refreshTokenPayload = {
    username: this.username,
    refreshToken: this.getRefreshToken()
  };

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  signup(signupPayload: SignUpPayload):Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/auth/sign-up",
          signupPayload,{responseType: 'text'});

  }

  login(loginRequestPayload: LoginRequestPayload):Observable<boolean> {
    return this.httpClient.post<LoginResponse>("http://localhost:8080/api/auth/login",
     loginRequestPayload).pipe(
      map(response => {
        this.localStorage.store("username", response.username);
        this.localStorage.store("jwToken", response.jwToken);
        this.localStorage.store("refreshToken", response.refreshToken);
        this.localStorage.store("expiredAt", response.expiredAt);
        this.LoggedIn.emit(true);
        this.username.emit(response.username)

        return true;
      })
     );
  }

  logout():void{
    this.httpClient.post("http://localhost:8080/api/auth/refresh/token", 
      this.refreshTokenPayload, {responseType: "text"})
      .subscribe(message => {console.log(message)},
       error => {console.log(error);});

    this.localStorage.clear('username');
    this.localStorage.clear('jwToken');
    this.localStorage.clear('expiredAt');
    this.localStorage.clear('refreshToken');
  }  

  getUsername(): string{
    return this.localStorage.retrieve('username');
  }

  getRefreshToken(): string{
    return this.localStorage.retrieve('refreshToken');
  }

  getJwToken(): string{
    return this.localStorage.retrieve('jwToken');
  }

  isLoggedIn(){
    return this.getJwToken != null;
  }
}
