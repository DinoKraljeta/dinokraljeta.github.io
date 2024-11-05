import { Component } from '@angular/core';
import { AI_GAMES } from '../constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  games = Object.values(AI_GAMES);
}
