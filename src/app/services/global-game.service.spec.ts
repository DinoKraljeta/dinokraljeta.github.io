import { TestBed } from '@angular/core/testing';

import { GlobalGameService } from './global-game.service';

describe('GlobalGameService', () => {
  let service: GlobalGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
