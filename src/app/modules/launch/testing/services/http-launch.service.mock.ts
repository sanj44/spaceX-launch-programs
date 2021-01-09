import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { httpLaunchMock } from '../mock/launch.mock';

@Injectable({
    providedIn: 'root'
})
export class HttpLaunchServiceMock {
    constructor() { }
    getLaunchList(params: string): Observable<any> {
        return of(httpLaunchMock);
    }
}
