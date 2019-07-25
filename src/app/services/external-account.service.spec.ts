import { TestBed } from '@angular/core/testing';

import { ExternalAccountService } from './external-account.service';

describe('ExternalAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalAccountService = TestBed.get(ExternalAccountService);
    expect(service).toBeTruthy();
  });
});
