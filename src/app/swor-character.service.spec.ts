import { TestBed } from '@angular/core/testing';

import { SworCharacterService } from './swor-character.service';

describe('SworCharacterService', () => {
  let service: SworCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SworCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
