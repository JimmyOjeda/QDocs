import { TestBed } from '@angular/core/testing';

import { SelectOptionService } from './select-option.service';

describe('SelectOptionService', () => {
  let service: SelectOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
