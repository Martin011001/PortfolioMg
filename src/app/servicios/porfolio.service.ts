import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { API_URL } from 'src/config';

@Injectable({
  providedIn: 'root'
})

export class PorfolioService {

  private apiUrlBase = API_URL

  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }

  public getContenido(apiUrl:string): Observable<any>{
    return this.http.get(this.apiUrlBase + apiUrl);
  }

  public putEdicion(apiUrl:string, body:any): Observable<any>{
    return this.http.put(apiUrl, body);
  }

  public deleteContenido(apiUrl:string): Observable<any>{
    return this.http.delete(apiUrl)
  }

  public postCreacion(apiUrl:string, body:any): Observable<any>{
    return this.http.post(apiUrl, body)
  }

}
