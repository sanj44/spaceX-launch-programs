import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { Observable, of } from 'rxjs';

import { HttpLaunchService } from './http-launch.service';

describe('HttpLaunchService', () => {
  let service: HttpLaunchService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [HttpClient]
    });
    service = TestBed.inject(HttpLaunchService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return spaceX data', () => {
    let params = '?limit=100';
    spyOn(httpClient, 'get').and.returnValue(of([]));
    let data = service.getLaunchList(params);
    expect(data).toBeInstanceOf(Observable);
  });
});
