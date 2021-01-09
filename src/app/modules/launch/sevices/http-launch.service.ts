import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLaunchService {

  constructor(private httpClient: HttpClient) { }

  getLaunchList(params: string): Observable<any> {
    let url = `https://api.spacexdata.com/v3/launches?${params}`;
    debugger;
    return this.httpClient.get(`https://api.spacexdata.com/v3/launches?${params}`);
  }
}
