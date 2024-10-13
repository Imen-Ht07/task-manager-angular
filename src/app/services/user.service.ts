import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:5050/auth';

  constructor(private http: HttpClient) { }

  login(user:User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`,user);
  }
}
