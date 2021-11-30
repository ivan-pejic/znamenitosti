import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ocjena } from '../interface/ocjena';

@Injectable({
  providedIn: 'root'
})
export class OcjenaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getOcjene(): Observable<Ocjena[]> {
    return this.http.get<Ocjena[]>(`${this.apiServerUrl}/ocjena/all`);
  }

    public addOcjena(ocjena: Ocjena): Observable<Ocjena> {
    return this.http.post<Ocjena>(`${this.apiServerUrl}/ocjena/add`, ocjena);
  }

    public updateOcjena(ocjena: Ocjena): Observable<Ocjena> {
    return this.http.put<Ocjena>(`${this.apiServerUrl}/ocjena/update`, ocjena);
  }

  public findOcjena(id: number): Observable<Ocjena> {
    return this.http.get<Ocjena>(`${this.apiServerUrl}/ocjena/find/${id}`);
  }
}
