import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';
import { Role } from '../enum/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }

  public findUser(korisnicko: string, sifra: string): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/find/${korisnicko}and${sifra}`);
  }


}