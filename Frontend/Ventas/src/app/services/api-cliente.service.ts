import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Response } from '../models/response';

//para agregar en el encabezado de las solicitudes (en vez de ponerlo en Postman)
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiClienteService {
  private myAppUrl = 'https://localhost:44357/api/cliente';

  constructor(private httpClient: HttpClient) {}

  getClientes(): Observable<Response> {
    return this.httpClient.get<Response>(this.myAppUrl);
  }

  add(cliente: Cliente): Observable<Response> {
    return this.httpClient.post<Response>(this.myAppUrl, cliente, httpOption);
  }

  update(cliente: Cliente): Observable<Response> {
    return this.httpClient.put<Response>(this.myAppUrl, cliente, httpOption);
  }

  delete(id: number): Observable<Response> {
    console.log(this.myAppUrl + id);
    return this.httpClient.delete<Response>(this.myAppUrl + '/' + id);
  }
}
