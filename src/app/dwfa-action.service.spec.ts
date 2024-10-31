import { TestBed } from '@angular/core/testing';

import { DwfaActionService } from './dwfa-action.service';

describe('DwfaActionService', () => {
  let service: DwfaActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwfaActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
