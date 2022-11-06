import { TestBed } from '@angular/core/testing';

import { ManageTemplatesService } from './manage-templates.service';

describe('ManageTemplatesService', () => {
  let service: ManageTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
