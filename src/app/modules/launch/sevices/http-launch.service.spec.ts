import { TestBed } from '@angular/core/testing';

import { HttpLaunchService } from './http-launch.service';

describe('HttpLaunchService', () => {
  let service: HttpLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
