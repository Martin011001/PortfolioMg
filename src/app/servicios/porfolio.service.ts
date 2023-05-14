import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { API_URL } from 'src/config';

@Injectable({
  providedIn: 'root'
})

export class PorfolioService {

  private apiUrlBase = API_URL
  private apiUrlBasePrueba = "https://portafolio-martin-gagliardi-2669.onrender.com/"

  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }

  public getContenido(apiUrl:string): Observable<any>{
    return this.http.get(this.apiUrlBasePrueba + apiUrl);
  }

  public putEdicion(apiUrl:string, body:any): Observable<any>{
    return this.http.put(this.apiUrlBasePrueba + apiUrl, body);
  }

  public deleteContenido(apiUrl:string): Observable<any>{
    return this.http.delete(this.apiUrlBasePrueba + apiUrl)
  }

  public postCreacion(apiUrl:string, body:any): Observable<any>{
    return this.http.post(this.apiUrlBasePrueba + apiUrl, body)
  }

}
