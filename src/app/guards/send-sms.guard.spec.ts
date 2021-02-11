import { TestBed } from '@angular/core/testing';

import { SendSmsGuard } from './send-sms.guard';

describe('SendSmsGuard', () => {
  let guard: SendSmsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SendSmsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
