import { TestBed } from '@angular/core/testing';

import { ToggleSidenavService } from './toggle-sidenav.service';

describe('ToggleSidenavService', () => {
  let service: ToggleSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
