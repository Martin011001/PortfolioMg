import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = "https://portafolio-martin-gagliardi-2669.onrender.com/user/login"
  //currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    //this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currenUser") || "{}"))
  }

  iniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales)
    /* .pipe(map(data=>{
      sessionStorage.setItem("currenUser", JSON.stringify(data)); */
  }
}




