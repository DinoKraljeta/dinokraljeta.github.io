import { TestBed } from '@angular/core/testing';

import { CyberpunkActionService } from './cyberpunk-action.service';

describe('CyberpunkActionService', () => {
  let service: CyberpunkActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyberpunkActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
