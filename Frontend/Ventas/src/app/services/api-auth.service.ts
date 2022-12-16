import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//para agregar en el encabezado de las solicitudes (en vez de ponerlo en Postman)
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiAuthService {
  private myAppUrl = 'https://localhost:44357/api/user/login';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<Response> {
    return this.httpClient.post<Response>(
      this.myAppUrl,
      { email, password },
      httpOption
    );
  }
}
