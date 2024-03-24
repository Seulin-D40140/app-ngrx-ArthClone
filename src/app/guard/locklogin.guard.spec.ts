import { TestBed } from '@angular/core/testing';

import { LockloginGuard } from './locklogin.guard';

describe('LockloginGuard', () => {
  let guard: LockloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LockloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
