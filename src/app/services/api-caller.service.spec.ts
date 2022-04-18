import { TestBed } from '@angular/core/testing';

import { ApiCallerService } from './api-caller.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiCallerService', () => {
  let service: ApiCallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiCallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
