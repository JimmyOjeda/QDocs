import { TestBed } from '@angular/core/testing';

import { ManageDatabasesService } from './manage-databases.service';

describe('ManageDatabasesService', () => {
  let service: ManageDatabasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDatabasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
