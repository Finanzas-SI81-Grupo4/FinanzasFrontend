import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {

  private apiUrl = 'http://localhost:8080/api/crediApp/v1/Customer';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/email/${email}/password/${password}`;
    return this.http.get(url);
  }
}
