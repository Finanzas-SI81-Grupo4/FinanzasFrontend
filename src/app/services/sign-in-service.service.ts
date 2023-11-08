import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {

  private backendUrl = 'http://localhost:8080/api/v1/users/auth'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(`${this.backendUrl}/sign-in`, body);
  }

  signup(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    return this.http.post(`${this.backendUrl}/sign-up`, body);
  }
}
