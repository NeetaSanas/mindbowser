import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: HttpClient) {}
  
  apiCall(fun_name: string, object_name: string, paramsArray: []) {
    //CALL API 
    return this.http.post(`/mindbowser/server/server.php`, {
      fun_name,
      object_name,
      paramsArray
    });
  }
}
