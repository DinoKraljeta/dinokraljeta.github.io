import { Component, OnInit } from '@angular/core';
import { AI_GAMES, Game, GameKey } from '../constants';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const gameKey = data['gameKey'] as GameKey;
      if (gameKey) {
        this.currentGameKey = gameKey;
        this.currentGame = this.games[gameKey];
        this.imgUrl = '';
        this.randomizeEnabled = !!this.currentGame?.hasRandomizer;
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
