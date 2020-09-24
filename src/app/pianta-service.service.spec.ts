import { TestBed } from '@angular/core/testing';

import { PiantaServiceService } from './pianta-service.service';

describe('PiantaServiceService', () => {
  let service: PiantaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiantaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
