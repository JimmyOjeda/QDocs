import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SearchDefinitionService } from './search-definition.service';

describe('SearchDefinitionService', () => {
  let service: SearchDefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchDefinitionService]
    });
    
  });

  it('should be created', () => {
    expect(true).toBeTrue;
  });
});
