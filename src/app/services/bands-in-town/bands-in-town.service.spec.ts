import { TestBed } from '@angular/core/testing';

import { BandsInTownService } from './bands-in-town.service';

describe('BandsInTownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandsInTownService = TestBed.get(BandsInTownService);
    expect(service).toBeTruthy();
  });
});
