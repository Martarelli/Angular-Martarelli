import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiNasaExoplanetsService } from './api-nasa-exoplanets.service';

describe('ApiNasaExoplanetsService', () => {
  let service: ApiNasaExoplanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [HttpClientModule]});
    service = TestBed.inject(ApiNasaExoplanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
