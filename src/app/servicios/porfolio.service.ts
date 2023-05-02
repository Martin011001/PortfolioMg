import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { SobreMiComponent } from '../componentes/contenido/sobre-mi/sobre-mi.component';

@Injectable({
  providedIn: 'root'
})

export class PorfolioService {

  //private apiUrl = 'sobreMi/traer'

  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }

  public getContenido(apiUrl:string): Observable<any>{
    return this.http.get(apiUrl);
  }

  public putEdicion(apiUrl:string, body:any): Observable<any>{
    return this.http.put(apiUrl, body);
  }

}
