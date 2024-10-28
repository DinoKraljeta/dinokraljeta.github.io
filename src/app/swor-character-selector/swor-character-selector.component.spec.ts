import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SworCharacterSelectorComponent } from './swor-character-selector.component';

describe('SworCharacterSelectorComponent', () => {
  let component: SworCharacterSelectorComponent;
  let fixture: ComponentFixture<SworCharacterSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SworCharacterSelectorComponent]
    });
    fixture = TestBed.createComponent(SworCharacterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
