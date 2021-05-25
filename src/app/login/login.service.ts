import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from '../global/server.service';
import { User } from './user.model';

@Injectable()
export class LoginService {
    public url = "server/User.php";
    constructor(private http: HttpClient, private serverService: ServerService) {}
    
    login(params){
        return this.serverService.apiCall('login', 'User', params) as Observable<User[]>;
    }
    isUserLoggedIn(): boolean {
        return true;
    }

    checkClientExists(email){
        return;
    }

    register(params){
        return this.serverService.apiCall('register', 'User', params);
    }

    logout() {
      let params 
      params = [{user: 1}];
        return this.serverService.apiCall('logout', 'User', params);
    }

    getSession() {
        return this.http.get(`/mindbowser/server/session.php`);
    }
      
} 