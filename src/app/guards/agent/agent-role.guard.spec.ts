import { TestBed } from '@angular/core/testing';

import { AgentRoleGuard } from './agent-role.guard';

describe('AgentRoleGuard', () => {
  let guard: AgentRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgentRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
