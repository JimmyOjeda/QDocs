import { TestBed } from '@angular/core/testing';

import { PdfManagerService } from './pdf-manager.service';

describe('PdfManagerService', () => {
  let service: PdfManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
