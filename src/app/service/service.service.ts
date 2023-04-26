import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private addUserData =
  environment.url + '/api/employee/add';
  private sendMail =
  environment.url + '/api/employee/sendMail';
  
  constructor(private http: HttpClient) { }
  adduser(data:any) {
    console.log(data,"data")
    return this.http.post(this.addUserData, data, );
  }

  sentmail(data:any) {
    console.log(data,"data")
    return this.http.post(this.sendMail, data, );
  }
}
