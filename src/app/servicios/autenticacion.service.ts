import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  /* url="";
  currentUserSubject: BehaviorSubject<any>

  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticacion esta correcto");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse('currentUser') || '{}')
  }

  iniciarSecion(credenciales:any): Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data =>{
      sessionStorage.setItem('currentUser', JSON.stringify(data))
      
      
      return data
    }))
  } */
}
