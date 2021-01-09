import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLaunchService {

  constructor(private httpClient: HttpClient) { }

  getLaunchList(id?: string): Observable<any> {
    return this.httpClient.get(`https://api.spacexdata.com/v3/launches?limit=100`);
  }
}
