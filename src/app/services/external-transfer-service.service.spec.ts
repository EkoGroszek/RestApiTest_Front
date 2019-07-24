import { TestBed } from '@angular/core/testing';

import { ExternalTransferServiceService } from './external-transfer-service.service';

describe('ExternalTransferServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalTransferServiceService = TestBed.get(ExternalTransferServiceService);
    expect(service).toBeTruthy();
  });
});
