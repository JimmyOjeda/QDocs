import { TestBed } from '@angular/core/testing';

import { SearchDefinitionService } from './search-definition.service';

describe('SearchDefinitionService', () => {
  let service: SearchDefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
