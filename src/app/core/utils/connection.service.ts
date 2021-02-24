import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private http: HttpClient) {}

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  get(url: string, params?: HttpParams): Observable<any> {
    const opts = params ? { params } : {};
    return this.http.get(url, opts);
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
