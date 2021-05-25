import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login/login.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
    session:any;
    message: string;
 
    constructor(private router:Router, private loginService: LoginService ) {  
    }
    credentials: any;
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
            //console.log(Number(localStorage.getItem('user')));
            if (Number(localStorage.getItem('user')) <= 0) {
                console.log(this.session);
                //alert('You are not allowed to view this page. You are redirected to login Page');
                console.log("You are not allowed to view this page. You are redirected to login Page");
                
                this.router.navigate(["/login"]);//,{ queryParams: { retUrl: route.url} });
                return false;
     
            }
        return true;
    }
}