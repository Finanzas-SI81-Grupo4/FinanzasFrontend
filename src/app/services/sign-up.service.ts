import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = 'http://localhost:8080/api/crediApp/v1/Customer';

  constructor(private http: HttpClient) {}

  registerCustomer(customerData: any) {
    return this.http.post(`${this.baseUrl}`, customerData);
  }
}
