import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiantaServiceService {

  //ottima prova
  
  constructor(private http: HttpClient) { }

  postData(data):Observable<any>{
    return this.http.post('http://localhost:8080/', data);
  }
}
