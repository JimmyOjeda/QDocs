import { TestBed } from '@angular/core/testing';

import { ManageDictionariesService } from './manage-dictionaries.service';

describe('ManageDictionariesService', () => {
  let service: ManageDictionariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDictionariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
