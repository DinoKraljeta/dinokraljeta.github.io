import { Component, OnInit } from '@angular/core';
import { AI_GAMES, DropdownOption, Game, GameKey } from '../constants';
import { GlobalGameService } from '../services/global-game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-sequence',
  templateUrl: './game-sequence.component.html',
  styleUrls: ['./game-sequence.component.scss'],
})
export class GameSequenceComponent implements OnInit {
  games = AI_GAMES;
  currentGameKey: GameKey | '' = '';
  currentGame: Game | null = null;
  selectedAction: { label: string; value: string | number | null } = {
    label: '',
    value: null,
  };
  imgUrl: string = '';
  randomizeEnabled = false;

  constructor(
    private globalGameService: GlobalGameService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const gameKey = data['gameKey'] as GameKey;
      if (gameKey) {
        this.globalGameService.setCurrentGame(gameKey);
        this.currentGameKey = gameKey;
        this.currentGame = this.games[gameKey];
        this.imgUrl = ''; // Reset image URL on game change
        this.randomizeEnabled = !!this.currentGame?.hasRandomizer; // Enable randomize button if hasRandomizer is true
      }
    });
  }

  setInitialImage() {
    if (this.selectedAction.value && this.currentGame) {
      this.imgUrl = `assets/img/${this.currentGame.base_src}/${this.selectedAction.value}.jpg`;
    }
  }

  randomizeImage() {
    if (this.currentGame?.hasRandomizer && this.selectedAction.value) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      this.imgUrl = `assets/img/${this.currentGame.base_src}/${this.selectedAction.value}/${randomNumber}.jpg`;
    }
  }

  setImage(value: string | number) {
    if (this.currentGame) {
      this.imgUrl = `assets/img/${this.currentGame.base_src}/${value}.jpg`;
    }
  }
}
