import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, throwError } from "rxjs";
import { AuthService } from "./auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

    isRefreshToken: boolean = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwt: any = this.authService.getJwToken();
        if(jwt){
            return next.handle(this.addJwToken(req, jwt))
            .pipe(catchError(error => {
                if(error instanceof HttpErrorResponse && error.status === 403){
                    return this.handleAuthErrors(req, next);
                }else{
                   return throwError(error);
                }
            }));
            
        }
        return next.handle(req);
    }
    handleAuthErrors(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        if(!this.isRefreshToken){
            this.isRefreshToken = true;
        }
        return next.handle(req);
    }
    addJwToken(req: HttpRequest<any>, jwt: any) {
      return req.clone({
            headers: req.headers.set('Authorization', 'Bearer '+ jwt)
        });
    }

}