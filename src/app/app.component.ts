import { Component } from '@angular/core';
import { AI_GAMES, GameKey } from './constants';
import { GlobalGameService } from './services/global-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ai-player';
  games = Object.values(AI_GAMES);

  constructor(private globalGameService: GlobalGameService) {}

  setGame(game: GameKey | '') {
    this.globalGameService.setCurrentGame(game);
  }
}
