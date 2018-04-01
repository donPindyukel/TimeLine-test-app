import { TestBed, inject } from '@angular/core/testing';

import { SortingDataServiceService } from './sorting-data-service.service';

describe('SortingDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortingDataServiceService]
    });
  });

  it('should be created', inject([SortingDataServiceService], (service: SortingDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
