import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {
  baseUrl = "http://127.0.0.1:8000/"

  constructor(private http: HttpClient) {
  }

  getUserTraitement(): Observable<any> {
    // var headers = {"Authorization": localStorage.getItem("userToken")}
    const headers = new HttpHeaders()
      .set('Authorization', 'Token ' + localStorage.getItem("userToken"));
    console.log(headers)

    return this.http.get(this.baseUrl + 'backend/usertraitement/', {headers});
  }

  addTraitement(userData): Observable<any> {
    console.log(userData)
    // var headers = {"Authorization": localStorage.getItem("userToken")}
    const headers = new HttpHeaders()
      .set('Authorization', 'Token ' + localStorage.getItem("userToken"))
        console.log(headers)

    return this.http.post(this.baseUrl + 'backend/traitement/', userData, {headers});
  }
}
