import { TestBed } from '@angular/core/testing';

import { UnknownGuard } from './unknown.guard';

describe('UnknownGuard', () => {
  let guard: UnknownGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnknownGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
