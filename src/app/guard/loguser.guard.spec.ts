import { TestBed } from '@angular/core/testing';

import { LoguserGuard } from './loguser.guard';

describe('LoguserGuard', () => {
  let guard: LoguserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoguserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
