import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  registrationApiUrl = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';
  profileApiUrl = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2';

  constructor(
    private http: HttpClient,
  ) { }

  // Method for Registering User call
  register(payload: any): Observable<any> {
    return this.http.get(this.registrationApiUrl, payload).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  // Method for Getting Profile Details
  getProfileDetails(): Observable<any> {
    return this.http.get(this.profileApiUrl).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

}
