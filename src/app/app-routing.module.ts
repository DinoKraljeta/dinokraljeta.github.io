import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { WarForArrakisComponent } from './war-for-arrakis/war-for-arrakis.component';
import { SworCharacterSelectorComponent } from './swor-character-selector/swor-character-selector.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'outer-rim', component: SworCharacterSelectorComponent },
  { path: 'war-for-arrakis', component: WarForArrakisComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
