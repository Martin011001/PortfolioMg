import { TestBed } from '@angular/core/testing';

import { ComunicacionIdServiceService } from './comunicacion-id-service';

describe('ComunicacionIdServiceService', () => {
  let service: ComunicacionIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
