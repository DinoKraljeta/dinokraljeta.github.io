import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSequenceComponent } from './game-sequence.component';

describe('GameSequenceComponent', () => {
  let component: GameSequenceComponent;
  let fixture: ComponentFixture<GameSequenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameSequenceComponent]
    });
    fixture = TestBed.createComponent(GameSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
