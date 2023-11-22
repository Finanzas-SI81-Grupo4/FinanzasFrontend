import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cronograma} from "../models/Cronograma";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {

  //private apiUrl = 'http://localhost:8080/api/finanzasgrupo4/v1/cuota';
  private apiUrl = 'http://backend-finanazas-production-3a94.up.railway.app/api/finanzasgrupo4/v1/cuota';

  constructor(private http: HttpClient) {}


  getCronogramasByClientId(id_cliente: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id_cliente}/cuota`);
  }


  calcularCronograma(customerId: number, cronograma: Cronograma): Observable<any> {
    const url = `${this.apiUrl}/${customerId}/hallarcuota`;
    console.log('Datos a enviar:', cronograma);
    return this.http.post(url, cronograma);
  }
}
