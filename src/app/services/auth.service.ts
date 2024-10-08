import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5297/api/auth';


  constructor(private http: HttpClient) { }

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/register`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    // Crear el objeto que se enviará en el cuerpo de la solicitud
    const body = { email };

    // Hacer la solicitud POST al servidor
    return this.http.post<User[]>(`${this.baseUrl}/user`, body);
}


  /*getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user?email=${email}`);
  }*/


}
