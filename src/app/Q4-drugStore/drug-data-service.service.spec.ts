import { TestBed } from '@angular/core/testing';

import { DrugDataServiceService } from './drug-data-service.service';

describe('DrugDataServiceService', () => {
  let service: DrugDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
