import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  //baseUrl = "https://qa-api.postex.pk/services/backoffice/api/order";
  constructor(private http: HttpClient) { }
  
  getData(): Observable<any> {
    return this.http.get(`${environment.baseURL}/order`, { headers: new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('auth_token')}`}) });
  }
}
