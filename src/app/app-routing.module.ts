import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AI_GAMES } from './constants';
import { GameSequenceComponent } from './game-sequence/game-sequence.component';

const routes: Routes = [{ path: '', component: LandingComponent }];

Object.values(AI_GAMES).forEach((game) =>
  routes.push({
    path: game.url,
    component: GameSequenceComponent,
    data: { gameKey: game.base_src },
  })
);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
