import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class ApiClienteService {
  private myAppUrl = 'https://localhost:44357/api/cliente';

  constructor(private httpClient: HttpClient) {}

  getClientes(): Observable<Response> {
    return this.httpClient.get<Response>(this.myAppUrl);
  }
}
