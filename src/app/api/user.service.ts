import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  postEmployeeDetails(payloadUse) {

    const payload = payloadUse;

    console.log( 'payload-->>', payload );

    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});

    return this.httpClient.post(
              // 'http://13.234.250.245/g2d/api/delivery_api.php?function=deliveryLogin',
              'http://mobicloudtechnologies.com/fiat_self_declaration/details.php' ,
              payload ,
              // {responseType: 'text', headers}
              {responseType: 'json', headers}
            );
  }

  checkExistEnployee(employee_id) {

    const payload = {employee_id};

    // console.log( 'payload-->>', payload );

    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});

    return this.httpClient.post(
              // 'http://13.234.250.245/g2d/api/delivery_api.php?function=deliveryLogin',
              'http://mobicloudtechnologies.com/fiat_self_declaration/check_id.php' ,
              payload ,
              // {responseType: 'text', headers}
              {responseType: 'json', headers}
            );
  }
}
