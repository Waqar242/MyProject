import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  //baseUrl = "https://qa-api.postex.pk/services/backoffice/api/user/login";
  constructor(private http: HttpClient) { }
  login(data: any): Observable<any>{
    console.log("I am Server");
    return this.http.post(`${environment.baseURL}/user/login`, data);
  }
}
