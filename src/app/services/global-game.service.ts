import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AI_GAMES, GameKey } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class GlobalGameService {
  private currentGameSubject = new BehaviorSubject<GameKey | ''>('');
  currentGame$ = this.currentGameSubject.asObservable();

  setCurrentGame(game: GameKey | '') {
    this.currentGameSubject.next(game);
  }

  getCurrentGame(): string {
    return this.currentGameSubject.value;
  }
}
