import { TestBed } from '@angular/core/testing';

import { AuthenticatioService } from './authenticatio.service';

describe('AuthenticatioService', () => {
  let service: AuthenticatioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
