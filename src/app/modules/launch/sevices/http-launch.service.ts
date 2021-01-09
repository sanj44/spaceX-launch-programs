import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IMission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class HttpLaunchService {

  constructor(private httpClient: HttpClient) { }

  getLaunchList(params: string): Observable<IMission[]> {
    return this.httpClient.get<IMission[]>(`https://api.spacexdata.com/v3/launches?${params}`);
  }
}
