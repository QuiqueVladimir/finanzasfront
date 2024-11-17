import { TestBed } from '@angular/core/testing';

import { UserPortfoliosService } from './user-portfolios.service';

describe('UserPortfoliosService', () => {
  let service: UserPortfoliosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPortfoliosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
