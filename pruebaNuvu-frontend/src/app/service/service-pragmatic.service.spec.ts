import { TestBed } from '@angular/core/testing';

import { ServicePragmaticService } from './service-pragmatic.service';

describe('ServicePragmaticService', () => {
  let service: ServicePragmaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePragmaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
