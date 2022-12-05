import { TestBed } from '@angular/core/testing';

import { ManageEntriesService } from './manage-entries.service';

describe('ManageEntriesService', () => {
  let service: ManageEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
