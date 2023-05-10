import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = "user/login"
  //currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    console.log("El servicio corre she bien");
    //this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currenUser") || "{}"))
  }

  iniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales)
    /* .pipe(map(data=>{
      sessionStorage.setItem("currenUser", JSON.stringify(data)); */
  }
}




