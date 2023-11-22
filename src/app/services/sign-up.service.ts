import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = 'http://opposite-scarf-production.up.railway.app/api/finanzasgrupo4/v1/Customer';
  //private baseUrl = 'http://backend-finanazas-production-3a94.up.railway.app/api/finanzasgrupo4/v1/Customer';

  constructor(private http: HttpClient) {}

  registerCustomer(customerData: any) {
    return this.http.post(`${this.baseUrl}`, customerData);
  }
}
