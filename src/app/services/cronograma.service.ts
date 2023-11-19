import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cronograma} from "../models/Cronograma";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {

  private apiUrl = 'http://opposite-scarf-production.up.railway.app/api/finanzasgrupo4/v1/cuota';

  constructor(private http: HttpClient) {}


  getCronogramasByClientId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/cuota`);
  }


  calcularCronograma(customerId: number, cronograma: Cronograma): Observable<any> {
    const url = `${this.apiUrl}/${customerId}/cuota`;
    console.log('Datos a enviar:', cronograma);
    return this.http.post(url, cronograma);
  }
}
