import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  getClientes():Observable<any>{
    return this.http.get('http://localhost:3000/clientes');
  }

  addCliente(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/clientes',data);
  }

  updateCliente(id:number,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/clientes/${id}`,data);
  }

  deleteCliente(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/clientes/${id}`);
  }

}