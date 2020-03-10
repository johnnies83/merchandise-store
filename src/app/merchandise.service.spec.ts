import { TestBed } from '@angular/core/testing';

import { MerchandiseServiceService } from './merchandise.service';

describe('MerchandiseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerchandiseServiceService = TestBed.get(MerchandiseServiceService);
    expect(service).toBeTruthy();
  });
});
