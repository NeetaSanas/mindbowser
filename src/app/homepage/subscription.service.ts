import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from '../global/server.service';

@Injectable()
export class SubscriptionService {
    constructor(private http: HttpClient, private serverService: ServerService) {}
    
    makePayment(payment){
        console.log(payment);
        return this.serverService.apiCall('makePayment', 'Subscription', payment);
    }

    getSubscriptionList(){
        return this.serverService.apiCall('getSubscriptionList', 'Subscription', []);
    }

    cancelPackage(subsciption_id){
        return this.serverService.apiCall('cancelPackage', 'Subscription', subsciption_id);
    }

    resumePackage(subsciption_id){
        return this.serverService.apiCall('resumePackage', 'Subscription', subsciption_id);
    }
      
} 