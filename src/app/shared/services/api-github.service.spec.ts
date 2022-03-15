import { TestBed } from '@angular/core/testing';

import { ApiGithubService } from './api-github.service';

describe('ApiGithubService', () => {
  let service: ApiGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
