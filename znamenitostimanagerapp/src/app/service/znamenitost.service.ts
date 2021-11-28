import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Znamenitost } from '../interface/znamenitost';

@Injectable({providedIn: 'root'})
export class ZnamenitostiService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getZnamenitosti(): Observable<Znamenitost[]> {
    return this.http.get<Znamenitost[]>(`${this.apiServerUrl}/znamenitost/all`);
  }

    public addZnamenitost(znamenitost: Znamenitost): Observable<Znamenitost> {
    return this.http.post<Znamenitost>(`${this.apiServerUrl}/znamenitost/add`, znamenitost);
  }

    public updateZnamenitost(znamenitost: Znamenitost): Observable<Znamenitost> {
    return this.http.put<Znamenitost>(`${this.apiServerUrl}/znamenitost/update`, znamenitost);
  }

    public deleteZnamenitost(znamenitostId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/znamenitost/delete/${znamenitostId}`);
  }
}