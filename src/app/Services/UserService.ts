import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://127.0.0.1:8000/"

  constructor(private http: HttpClient) {
  }

  registerUser(userData): Observable<any> {
    return this.http.post(this.baseUrl + 'backend/patient/', userData);
  }

  loginUser(userData): Observable<any> {
    console.log(userData)
    return this.http.post(this.baseUrl + 'backend/users/login/', userData);
  }

  profileUser(): Observable<any> {
    // var headers = {"Authorization": localStorage.getItem("userToken")}
    const headers = new HttpHeaders()
      .set('Authorization', 'Token ' + localStorage.getItem("userToken"));
    console.log(headers)
    return this.http.get(this.baseUrl + 'backend/profile/', {headers});

  }
}
