import { Component } from '@angular/core';
import { GlobalGameService } from '../services/global-game.service';
import { AI_GAMES, GameKey } from '../constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  games = Object.values(AI_GAMES);

  constructor(private globalGameService: GlobalGameService) {}

  setGame(game: GameKey) {
    this.globalGameService.setCurrentGame(game);
  }
}
