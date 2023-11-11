import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cronograma} from "../models/Cronograma";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {

  private apiUrl = 'http://localhost:8080/api/crediApp/v1/cronograma';

  constructor(private http: HttpClient) {}

  calcularCronograma(customerId: number, cronograma: Cronograma): Observable<any> {
    const url = `${this.apiUrl}/${customerId}/calculoCronograma`;
    console.log('Datos a enviar:', cronograma);
    return this.http.post(url, cronograma);
  }
}
