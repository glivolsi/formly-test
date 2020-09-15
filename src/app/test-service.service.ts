import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Observable<any>>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
